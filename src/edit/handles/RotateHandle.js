L.RotateHandle = L.EditHandle.extend({
  options: {
    TYPE: 'rotate',
    // icon: L.icon({
    //   className:"distortable-image-rotate-icon",
    //   iconUrl:
    //     // eslint-disable-next-line max-len
    //     'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHZlcnNpb249IjEuMSI+PHJlY3QgaWQ9ImJhY2tncm91bmRyZWN0IiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4PSIwIiB5PSIwIiBmaWxsPSJub25lIiBzdHJva2U9Im5vbmUiLz4KCjxnIGNsYXNzPSJjdXJyZW50TGF5ZXIiIHN0eWxlPSIiPjx0aXRsZT5MYXllciAxPC90aXRsZT48ZyBpZD0ic3VyZmFjZTEiIGNsYXNzPSIiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMSI+CjxwYXRoIHN0eWxlPSJzdHJva2U6IG5vbmU7IGZpbGwtcnVsZTogbm9uemVybzsiIGQ9Ik0gMS4zMjgxMjUgOC4zMzU5MzggTCAzLjUxOTUzMSA4Ljg0Mzc1IEMgMy43MzQzNzUgNy45MzM1OTQgNC4xNzk2ODggNy4wNzgxMjUgNC44MDg1OTQgNi4zNzUgTCAzLjEzMjgxMiA0Ljg3NSBDIDIuMjUgNS44NTkzNzUgMS42Mjg5MDYgNy4wNTQ2ODggMS4zMjgxMjUgOC4zMzU5MzggWiBNIDEuMzI4MTI1IDguMzM1OTM4ICIgaWQ9InN2Z18xIiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjEiLz4KPHBhdGggc3R5bGU9InN0cm9rZTogbm9uZTsgZmlsbC1ydWxlOiBub256ZXJvOyIgZD0iTSAxLjEyNSAxMS4yMzQzNzUgQyAxLjMzMjAzMSAxMi42OTE0MDYgMS45NDUzMTIgMTQuMDU0Njg4IDIuODk0NTMxIDE1LjE4MzU5NCBMIDQuNjI4OTA2IDEzLjczODI4MSBDIDMuOTQ5MjE5IDEyLjkzMzU5NCAzLjUxMTcxOSAxMS45NTcwMzEgMy4zNjMyODEgMTAuOTIxODc1IEMgMy4zNjMyODEgMTAuOTIxODc1IDEuMTI1IDExLjIzNDM3NSAxLjEyNSAxMS4yMzQzNzUgWiBNIDEuMTI1IDExLjIzNDM3NSAiIGlkPSJzdmdfMiIgZmlsbD0iI2ZmZiIgZmlsbC1vcGFjaXR5PSIxIi8+CjxwYXRoIHN0eWxlPSJzdHJva2U6IG5vbmU7IGZpbGwtcnVsZTogbm9uemVybzsiIGQ9Ik0gMTAuMTI1IDIuMzM5ODQ0IEwgMTAuMTI1IDAgTCA2Ljc1IDMuMzc1IEwgMTAuMTI1IDYuNzUgTCAxMC4xMjUgNC42MTMyODEgQyAxMi42ODc1IDUuMTM2NzE5IDE0LjYyNSA3LjQxMDE1NiAxNC42MjUgMTAuMTI1IEMgMTQuNjI1IDEzLjIyNjU2MiAxMi4xMDE1NjIgMTUuNzUgOSAxNS43NSBDIDguMDU0Njg4IDE1Ljc1IDcuMTIxMDk0IDE1LjUxMTcxOSA2LjMwMDc4MSAxNS4wNjI1IEwgNS4yMTg3NSAxNy4wMzUxNTYgQyA2LjM3MTA5NCAxNy42NjQwNjIgNy42Nzk2ODggMTggOSAxOCBDIDEzLjM0Mzc1IDE4IDE2Ljg3NSAxNC40NjQ4NDQgMTYuODc1IDEwLjEyNSBDIDE2Ljg3NSA2LjE2Nzk2OSAxMy45MzM1OTQgMi44ODY3MTkgMTAuMTI1IDIuMzM5ODQ0IFogTSAxMC4xMjUgMi4zMzk4NDQgIiBpZD0ic3ZnXzMiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMSIvPgo8L2c+PC9nPjwvc3ZnPg==',
    //     // 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAklEQVR4AewaftIAAAHiSURBVMXBa3HbShgA0PMp/1sCCo8oCEpgTaCXgIXAJiDzyCJoAUTm4UVQAns1Y8+snWnTvJyeE16hkjDgDrfoNTMKcpC9UPiLSo8JyetkjEHxjPCMyoS199kFoz8Iv1HpMaN3qWDCHoegOKkkRwnJpRmroHgiPFEZ8IBekzEGxQtUEhKSS/fB7Ew4U+lxcGkVZG9QWWPSFAxBcdK59KApuA+yNwp2uEdx1GN25sZJZULSfAtm77SlbNjju6MvG75u+WHRWVR6rDVjMPsgwYyVZl3pLTpHkyYHOx8syMiayaJzlDTZ9YyaZNFVkiYH2ZUEBcVJJXVImuz6Js3Qofe59pq7DoOTILu+g+a288mCouk7/1iH4qTS+2QdDppbV1ZJmrnDXnPnc5UOs2Z0fUmTuyBr+krvSioJyUmQO0dZM7mepMkWnaNRkyrJB6uskTSjxY3Fll8bvmJwlDb83FJ8gMqAB80uyBY3Trb82PAfvjj6vuHnluIdKgMeNXOwctK5NKBoHitrb1RJeHRp5Ux4ojLg0aWMHGQvUOkxIWkKVsHsTPiNSo8HDC5lZIsgO6n0uMUdRvQuFQxB8UR4RmXC2vvsgtEfhL+o9JiQvE7GGBTPCK9QSUjoMWgKDthjDrIX+h/k0I7gth6N5gAAAABJRU5ErkJggg==',
    //     // iconSize: [32, 32],
    //   iconAnchor: [16, 16],
    // }),
    icon: L.divIcon({
      className: 'distortable-image-div-icon',
      iconAnchor: [16, 16],
      html: `<div style="    width: 30px;
      height: 30px;
      background: rgb(78, 195, 142);
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50px;"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="18" height="18" version="1.1"><rect id="backgroundrect" width="100%" height="100%" x="0" y="0" fill="none" stroke="none"/>

      <g class="currentLayer" style=""><title>Layer 1</title><g id="surface1" class="" fill="#fff" fill-opacity="1">
      <path style="stroke: none; fill-rule: nonzero;" d="M 1.328125 8.335938 L 3.519531 8.84375 C 3.734375 7.933594 4.179688 7.078125 4.808594 6.375 L 3.132812 4.875 C 2.25 5.859375 1.628906 7.054688 1.328125 8.335938 Z M 1.328125 8.335938 " id="svg_1" fill="#fff" fill-opacity="1"/>
      <path style="stroke: none; fill-rule: nonzero;" d="M 1.125 11.234375 C 1.332031 12.691406 1.945312 14.054688 2.894531 15.183594 L 4.628906 13.738281 C 3.949219 12.933594 3.511719 11.957031 3.363281 10.921875 C 3.363281 10.921875 1.125 11.234375 1.125 11.234375 Z M 1.125 11.234375 " id="svg_2" fill="#fff" fill-opacity="1"/>
      <path style="stroke: none; fill-rule: nonzero;" d="M 10.125 2.339844 L 10.125 0 L 6.75 3.375 L 10.125 6.75 L 10.125 4.613281 C 12.6875 5.136719 14.625 7.410156 14.625 10.125 C 14.625 13.226562 12.101562 15.75 9 15.75 C 8.054688 15.75 7.121094 15.511719 6.300781 15.0625 L 5.21875 17.035156 C 6.371094 17.664062 7.679688 18 9 18 C 13.34375 18 16.875 14.464844 16.875 10.125 C 16.875 6.167969 13.933594 2.886719 10.125 2.339844 Z M 10.125 2.339844 " id="svg_3" fill="#fff" fill-opacity="1"/>
      </g></g></svg></div>`,
  }),
  },

  _onHandleDrag() {
    const overlay = this._handled;
    const formerLatLng = overlay.getCorner(this._corner);
    const newLatLng = this.getLatLng();
    const angle = this.calculateAngleDelta(formerLatLng, newLatLng);

    /*
     * running rotation logic even for an angle delta of 0
     * prevents a small, occasional marker flicker
     */
    overlay.rotateBy(angle, 'rad');
  },

  updateHandle() {
    this.setLatLng(this._handled.getCorner(this._corner));
  },
});

L.rotateHandle = function(overlay, idx, options) {
  return new L.RotateHandle(overlay, idx, options);
};
