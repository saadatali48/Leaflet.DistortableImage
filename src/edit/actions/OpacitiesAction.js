let opacities = [100, 80, 60, 40, 20, 0]; // Set numeric values from 0 to 100.

// Add custom CSS scripts and overwrites. Pending for better implementation of CSSStyleSheet in browsers.
const subtoolbarCss = new CSSStyleSheet();
subtoolbarCss.replaceSync(
    `.leaflet-toolbar-icon-vertical {
        box-sizing: border-box !important;
        display: block !important;
        width: 30px !important;
        height: 30px !important;
        line-height: 30px !important;
        padding: 0 !important;
        text-align: center !important;
        text-decoration: none !important;
        background-color: #fff;
        border: inset 0.5px lightgray !important;
        font-size: 12px !important;
        font-weight: bold !important;
        color:#0087A8 !important;
        float: none !important;
        margin: auto !important;
        z-index:900 !important;
      }
    `
);

subtoolbarCss.insertRule(
    `.leaflet-toolbar-1 li:first-child a {
        border-radius: 4px 4px 0px 0px !important;
    }`
);
document.adoptedStyleSheets = [subtoolbarCss];

opacities = opacities.map((o) => {
  (isNaN(o) || o > 100) ? o = 100 : o;
  (o < 0) ? o = 0 : o;

  return L.EditAction.extend({
    options: {
      toolbarIcon: {
        html: o,
        tooltip: 'Opacity ' + o +'%',
        className: 'leaflet-toolbar-icon-vertical',
        style: 'background-color:rgb(' + (100 - o) + '%,' + (100 - o) + '%,' + (100 - o) + '%);',
      },
    },
    addHooks() {
      this._overlay.editing._setOpacities(o/100);
    },
  });
});

L.OpacitiesToolbar2 = L.Toolbar2.extend({
  options: {
    className: '',
    filter: function() { return true; },
    actions: [],
    style: `translate(-1px, -${ ((opacities.length + 1) * 30)}px)`,
  },

  appendToContainer(container) {
    let baseClass = this.constructor.baseClass + '-' + this._calculateDepth();
    let className = baseClass + ' ' + this.options.className;
    let Action; let action;
    let i; let j; let l; let m;

    this._container = container;
    this._ul = L.DomUtil.create('ul', className, container);
    this._ul.style.transform = ( this.options.style ) ? this.options.style : '';

    // Ensure that clicks, drags, etc. don't bubble up to the map.
    // These are the map events that the L.Draw.Polyline handler listens for.
    // Note that L.Draw.Polyline listens to 'mouseup', not 'mousedown', but
    // if only 'mouseup' is silenced, then the map gets stuck in a halfway
    // state because it receives a 'mousedown' event and is waiting for the
    // corresponding 'mouseup' event.
    this._disabledEvents = [
      'click', 'mousemove', 'dblclick',
      'mousedown', 'mouseup', 'touchstart',
    ];

    for (j = 0, m = this._disabledEvents.length; j < m; j++) {
      L.DomEvent.on(this._ul, this._disabledEvents[j], L.DomEvent.stopPropagation);
    }

    /* Instantiate each toolbar action and add its corresponding toolbar icon. */
    for (i = 0, l = this.options.actions.length; i < l; i++) {
      Action = this._getActionConstructor(this.options.actions[i]);

      action = new Action();
      action._createIcon(this, this._ul, this._arguments);
    }
  },
});


L.OpacitiesAction = L.EditAction.extend({
  initialize(map, overlay, options) {
    const edit = overlay.editing;
    const mode = edit._mode;

    options = options || {};
    options.toolbarIcon = {
      svg: false,
      html: `<div style="    width: 30px;
      height: 30px;
      background: rgb(78, 195, 142);
      display: flex;
      justify-content: center;
      align-items: center;
     "><svg xmlns="http://www.w3.org/2000/svg" width="14" height="18" viewBox="0 0 14 18">
     <g fill="white"><path d="m2.1 10.85c.2.98.68 1.89 1.39 2.61 0 0 .01.01.01.01.99.99 2.3 1.49 3.6 1.49h.01c1.3 0 2.6-.5 3.59-1.5.73-.73 1.19-1.66 1.39-2.61z" opacity=".75"/><path d="m2 9.85c0 .34.04.68.1 1.01h9.99c.07-.34.11-.67.11-1.01 0-1.13-.4-2.21-1.08-3.09h-8.04c-.7.91-1.08 2.01-1.08 3.09z" opacity=".5"/><path d="m3.08 6.75h8.03c-.13-.17-.26-.35-.41-.5l-3.6-3.6-3.61 3.6c-.15.16-.27.33-.41.5z" opacity=".25"/></g><path d="m10.71 6.25c.95.96 1.49 2.25 1.49 3.6 0 1.27-.5 2.62-1.49 3.61-1.99 1.99-5.21 2-7.2.01 0 0-.01-.01-.01-.01-.96-.96-1.5-2.26-1.5-3.61 0-1.27.5-2.6 1.49-3.6l3.61-3.6z" fill="none" stroke="white" stroke-width=".1"/><path d="m10.71 6.25c.95.96 1.49 2.25 1.49 3.6 0 1.27-.5 2.62-1.49 3.61-1.99 1.99-5.21 2-7.2.01 0 0-.01-.01-.01-.01-.96-.96-1.5-2.26-1.5-3.61 0-1.27.5-2.6 1.49-3.6l3.61-3.6z" fill="none" stroke="white" stroke-width="1.7"/>
   </svg>
   </div>`,
      tooltip: 'Set custom opacity',
      className: mode === 'lock' ? 'disabled' : '',
    };

    options.subToolbar = new L.OpacitiesToolbar2({
      actions: opacities,
    });

    L.DistortableImage.action_map.o = mode === 'lock' ? '' : '_setOpacities';

    L.EditAction.prototype.initialize.call(this, map, overlay, options);
  },

  addHooks() {
    const link = this._link;
    if (L.DomUtil.hasClass(link, 'subtoolbar_enabled')) {
      L.DomUtil.removeClass(link, 'subtoolbar_enabled');
      setTimeout(() => {
        this.options.subToolbar._hide();
      }, 100);
    } else {
      L.DomUtil.addClass(link, 'subtoolbar_enabled');
    };

    L.IconUtil.toggleXlink(link, 'opacities', 'cancel');
    L.IconUtil.toggleTitle(link, 'Make Image Transparent', 'Cancel');
  },
});
