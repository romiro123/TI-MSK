import noUiSlider from 'nouislider';

document.querySelectorAll('.range').forEach((el) => {
  noUiSlider.create(el, {
    start: Number(el.getAttribute('data-start')),
    direction: 'ltr',
    step: 1,
    connect: 'lower',
    tooltips: {
      to: function (numericValue) {
        return numericValue.toFixed(0);
      }
    },
    range: {
      'min': Number(el.getAttribute('data-min')),
      'max': Number(el.getAttribute('data-max')),
    }
  });
})

