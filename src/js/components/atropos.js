import Atropos from 'atropos';

document.querySelectorAll('.catalog__card').forEach((element) => {
  Atropos({
    el: element,
    shadow: false,
    activeOffset: 100,
  });
})
