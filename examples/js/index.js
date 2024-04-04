let map;

(() => {
  map = L.map('map').setView([51.505, -0.09], 13);
  map.addGoogleMutant();

  map.whenReady(() => {
    img = L.distortableImageOverlay('example.jpg', {
      selected: true,
      fullResolutionSrc: 'large.jpg',
      actions:[  L.DragAction,
        L.ScaleAction,
        L.RotateAction,
        L.OpacityAction,
        L.OpacitiesAction,
        L.LockAction,
        L.StackAction,
        L.RestoreAction,
        L.DeleteAction,]
    }).addTo(map);
    console.log(img);
  });
})();

L.Control.geocoder().addTo(map);
