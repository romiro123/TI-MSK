// Подключение свайпера
import Swiper, { Navigation, Pagination, Autoplay, Grid, FreeMode, EffectCoverflow, Effect, CenteredSlides, coverflowEffect } from 'swiper';
Swiper.use([Navigation, Pagination, Autoplay, Grid, FreeMode, EffectCoverflow, Effect, CenteredSlides, coverflowEffect]);

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

const swiperNews = new Swiper('.swiper--news', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  loop: true,
  slidesPerView: 'auto',
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2.5,
  },
  // pagination: {
  //   el: '.swiper-pagination',
  //   clickable: true,
  // },
  // navigation: {
  //   nextEl: '.swiper-button-next',
  //   prevEl: '.swiper-button-prev',
  // }
});



const swiperReviews = new Swiper('.swiper--reviews', {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  navigation: {
    nextEl: '.reviews__btn-next',
    prevEl: '.reviews__btn-prev',
  },
});
