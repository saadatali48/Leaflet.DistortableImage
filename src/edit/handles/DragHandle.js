L.DragHandle = L.EditHandle.extend({
  options: {
    TYPE: 'drag',
    icon: L.divIcon({
      className: 'distortable-image-div-icon',
      iconAnchor: [16, 16],
      html: `<div style="display:none !important;width: 30px;
      height: 30px;
      background: rgb(78, 195, 142);
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50px;"><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" style="height: 20px; color: rgb(255, 255, 255);"><g id="drag-31" transform="translate(-1 -1)"><line id="Line_4646" data-name="Line 4646" y1="14" transform="translate(8.5 1.5)" fill="none" stroke="#FFF" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"></line><line id="Line_4647" data-name="Line 4647" x2="14" transform="translate(1.5 8.5)" fill="none" stroke="#FFF" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"></line><path id="Path_10600" data-name="Path 10600" d="M6.5,3.5l2-2,2,2" fill="none" stroke="#FFF" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"></path><path id="Path_10601" data-name="Path 10601" d="M6.5,13.5l2,2,2-2" fill="none" stroke="#FFF" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"></path><path id="Path_10602" data-name="Path 10602" d="M13.5,6.5l2,2-2,2" fill="none" stroke="#FFF" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"></path><path id="Path_10603" data-name="Path 10603" d="M3.5,6.5l-2,2,2,2" fill="none" stroke="#FFF" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"></path></g></svg></div>`,
  }),
  },

  _onHandleDrag() {
    const overlay = this._handled;
    const formerLatLng = overlay.getCorner(this._corner);
    const newLatLng = this.getLatLng();

    overlay.dragBy(formerLatLng, newLatLng);
  },

  updateHandle() {
    this.setLatLng(this._handled.getCorner(this._corner));
  },
});

L.dragHandle = function(overlay, idx, options) {
  return new L.DragHandle(overlay, idx, options);
};


