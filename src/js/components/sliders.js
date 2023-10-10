// Подключение свайпера
import Swiper, { Navigation, Pagination, Autoplay, Grid, FreeMode } from 'swiper';
Swiper.use([Navigation, Pagination, Autoplay, Grid, FreeMode]);

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
  loop: true,
  navigation: {
    nextEl: '.lizing__btn-next',
    prevEl: '.lizing__btn-prev',
  },
});

const swiperProject = new Swiper('.swiper--project', {
  slidesPerView: 3,
  slidesPerGroup: 3,
  grid: {
    rows: 2,
    fill: 'row',
  },
  spaceBetween: 30,
  navigation: {
    nextEl: '.project__btn-next',
    prevEl: '.project__btn-prev',
  },
});

