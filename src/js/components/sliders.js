// Подключение свайпера
import Swiper, { Navigation, Pagination, Autoplay, FreeMode } from 'swiper';
Swiper.use([Navigation, Pagination, Autoplay, FreeMode]);

const swiperHero = new Swiper('.swiper--hero', {
  slidesPerView: 1,
  // spaceBetween: 30,
  // speed: 3000,
  // autoplay: {
  //   delay: 1,
  //   disableOnInteraction: false,
  //   enabled: true,
  // },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: ".swiper-pagination--bottom",
    type: "progressbar",
  },
  loop: true,
});

const swiperCompanies = new Swiper('.swiper--companies', {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
});

const swiperLizing = new Swiper('.swiper--lizing', {
  slidesPerView: 2,
  // loop: true,
  navigation: {
    nextEl: '.btn--next',
    prevEl: '.btn--prev',
  },
});


