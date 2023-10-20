import noUiSlider from 'nouislider';
let directionSlider = document.getElementById('slider');

noUiSlider.create(directionSlider, {
  start: 0,
  direction: 'ltr',
  step: 1,
  connect: 'lower',
  tooltips: {
    // tooltips are output only, so only a "to" is needed
    to: function (numericValue) {
      return numericValue.toFixed(0);
    }
  },
  range: {
    'min': 0,
    'max': 20,
  }
});


// noUiSlider.cssClasses.target += ' range-slider';
// let slider = document.getElementById('rangeSlider');

// noUiSlider.create(slider, {
//   start: [2000, 150000],
//   connect: true,
//   range: {
//     'min': 0,
//     'max': 350000
//   }
// });

// const inputNumberBefore = document.getElementById('input-number-before');
// const inputNumberAfter = document.getElementById('input-number-after');

// slider.noUiSlider.on('update', function (values, handle) {
//   const value = values[handle];
//   if (handle) {
//     inputNumberAfter.value = Math.round(value);
//   } else {
//     inputNumberBefore.value = Math.round(value);
//   }
// });
