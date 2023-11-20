import Atropos from 'atropos';

if (window.innerWidth > 1025) {
  document.querySelectorAll('.catalog__card').forEach((element) => {
    Atropos({
      el: element,
      shadow: false,
      activeOffset: 100,
    });
  })
}
