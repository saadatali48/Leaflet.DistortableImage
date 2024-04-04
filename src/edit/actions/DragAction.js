L.DragAction = L.EditAction.extend({
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
      "><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" style="height: 20px; color: rgb(255, 255, 255);"><g id="drag-31" transform="translate(-1 -1)"><line id="Line_4646" data-name="Line 4646" y1="14" transform="translate(8.5 1.5)" fill="none" stroke="#FFF" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"></line><line id="Line_4647" data-name="Line 4647" x2="14" transform="translate(1.5 8.5)" fill="none" stroke="#FFF" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"></line><path id="Path_10600" data-name="Path 10600" d="M6.5,3.5l2-2,2,2" fill="none" stroke="#FFF" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"></path><path id="Path_10601" data-name="Path 10601" d="M6.5,13.5l2,2,2-2" fill="none" stroke="#FFF" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"></path><path id="Path_10602" data-name="Path 10602" d="M13.5,6.5l2,2-2,2" fill="none" stroke="#FFF" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"></path><path id="Path_10603" data-name="Path 10603" d="M3.5,6.5l-2,2,2,2" fill="none" stroke="#FFF" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"></path></g></svg></div>`,
      tooltip: overlay.options.translation.dragImage,
      className: 'drag',
    };

    L.DistortableImage.action_map.D = '_dragMode';
    L.EditAction.prototype.initialize.call(this, map, overlay, options);
  },

  addHooks() {
    const edit = this._overlay.editing;
    edit._dragMode();
  },
});
