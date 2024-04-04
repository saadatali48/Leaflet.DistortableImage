L.OpacityAction = L.EditAction.extend({
  initialize(map, overlay, options) {
    const edit = overlay.editing;
    const mode = edit._mode;
    let use;
    let tooltip;

    if (edit._transparent) {
      use = `<div style="    width: 30px;
      height: 30px;
      background: rgb(78, 195, 142);
      display: flex;
      justify-content: center;
      align-items: center;
     "><svg xmlns="http://www.w3.org/2000/svg" width="14" height="18" viewBox="0 0 14 18">
     <path stroke="#ffffff" stroke-width="2" d="M10.245,5 C11.415,6.17 12,7.73 12,9.23 C12,10.73 11.415,12.3125 10.245,13.4825 C9.075,14.6525 7.5375,15.245 6,15.245 C4.4625,15.245 2.925,14.6525 1.755,13.4825 C0.585,12.3125 0,10.73 0,9.23 C0,7.73 0.585,6.17 1.755,5 L6,0.7625 L10.245,5 Z M10.245,5 L6,0.7625 L1.755,5 C0.585,6.17 0,7.73 0,9.23 C0,10.73 0.585,12.3125 1.755,13.4825 C2.925,14.6525 4.4625,15.245 6,15.245 C7.5375,15.245 9.075,14.6525 10.245,13.4825 C11.415,12.3125 12,10.73 12,9.23 C12,7.73 11.415,6.17 10.245,5 Z" transform="translate(2 2) scale(0.85 0.85)"/>
   </svg>
   </div>`;
      tooltip = overlay.options.translation.makeImageOpaque;
    } else {
      use = `<div style="    width: 30px;
      height: 30px;
      background: rgb(78, 195, 142);
      display: flex;
      justify-content: center;
      align-items: center;
     "><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="white">
     <path  d="M13.245,6 L9,1.7625 L4.755,6 C3.585,7.17 3,8.73 3,10.23 C3,11.73 3.585,13.3125 4.755,14.4825 C5.925,15.6525 7.4625,16.245 9,16.245 C10.5375,16.245 12.075,15.6525 13.245,14.4825 C14.415,13.3125 15,11.73 15,10.23 C15,8.73 14.415,7.17 13.245,6 Z M4.5,10.5 C4.5075,9 4.965,8.0475 5.82,7.2 L9,3.9525 L12.18,7.2375 C13.035,8.0775 13.4925,9 13.5,10.5 L4.5,10.5 Z"/>
   </svg></div>`;
      tooltip = overlay.options.translation.makeImageTransparent;
    }

    options = options || {};
    options.toolbarIcon = {
      svg: false,
      html: use,
      tooltip: tooltip,
      className: mode === 'lock' ? 'disabled' : '',
    };

    L.DistortableImage.action_map.o = mode === 'lock' ? '' : '_toggleOpacity';

    L.EditAction.prototype.initialize.call(this, map, overlay, options);
  },

  addHooks() {
    const edit = this._overlay.editing;
    const link = this._link;

    L.IconUtil.toggleXlink(link, 'opacity', 'opacity_empty');
    L.IconUtil.toggleTitle(link, 'Make Image Transparent', 'Make Image Opaque');
    edit._toggleOpacity();
  },
});
