L.ScaleAction = L.EditAction.extend({
  initialize(map, overlay, options) {
    options = options || {};
    options.toolbarIcon = {
      svg: false,
      html: `<div style="    width: 30px;
      height: 30px;
      background: rgb(78, 195, 142);
      display: flex;
      justify-content: center;
      align-items: center;
     "><svg height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg" style="height: 20px; color: rgb(255, 255, 255);"><g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"><path d="m304 96h112v112"></path><path d="m405.77 106.2-293.79 293.82"></path><path d="m208 416h-112v-112"></path></g></svg></div>`,
      tooltip: overlay.options.translation.scaleImage,
      className: 'scale',
    };

    L.DistortableImage.action_map.s = '_scaleMode';
    L.EditAction.prototype.initialize.call(this, map, overlay, options);
  },

  addHooks() {
    const edit = this._overlay.editing;
    edit._scaleMode();
  },
});
