// document.addEventListener("DOMContentLoaded", function () {
//   ymaps.ready(init);
//   function init() {
//     let myMap = new ymaps.Map("map", {
//       center: [55.754485275189325, 37.749262731718204],
//       zoom: 16,
//       controls: ['zoomControl'],
//       behaviors: ['multiTouch']
//     }, {
//       suppressMapOpenBlock: true
//     });

//     let myPlacemark = new ymaps.Placemark([55.754485275189325, 37.749262731718204], {}, {
//       iconLayout: 'default#image',
//       iconImageHref: './img/svg/geo.svg',
//       iconImageSize: [35, 35],
//       iconImageOffset: [-15, -42]
//     });
//     myMap.behaviors.disable('scrollZoom').disable('drag').enable('multiTouch');
//     myMap.geoObjects.add(myPlacemark);
//   }
// });
