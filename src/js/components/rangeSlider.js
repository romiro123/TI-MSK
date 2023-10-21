import noUiSlider from 'nouislider';
const pricepSlider = document.getElementById('range-pricep');
const selchozSlider = document.getElementById('range-selchoz');
const ovoshchSlider = document.getElementById('range-ovoshch');
const samosvalSlider = document.getElementById('range-samosval');
const polupritseplSlider = document.getElementById('range-polupritsep');


noUiSlider.create(pricepSlider, {
  start: 20,
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
    'min': 17,
    'max': 30,
  }
});
noUiSlider.create(selchozSlider, {
  start: 20,
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
    'min': 14,
    'max': 40,
  }
});
noUiSlider.create(ovoshchSlider, {
  start: 20,
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
    'min': 18,
    'max': 28,
  }
});
noUiSlider.create(samosvalSlider, {
  start: 20,
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
    'min': 8,
    'max': 28,
  }
});
noUiSlider.create(polupritseplSlider, {
  start: 40,
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
    'min': 30,
    'max': 65,
  }
});
