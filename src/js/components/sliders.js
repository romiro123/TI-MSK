// Подключение свайпера
import Swiper, { Navigation, Pagination, Autoplay, Grid, EffectCoverflow } from 'swiper';
Swiper.use([Navigation, Pagination, Autoplay, Grid, EffectCoverflow]);

const swiperHero = new Swiper('.swiper--hero', {
  slidesPerView: 1,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: ".swiper-pagination--bottom",
    type: "progressbar",
  },
  speed: 3000,
  autoplay: {
    delay: 5000,
  },
  loop: true,
});

const swiperCompanies = new Swiper('.swiper--companies', {
  spaceBetween: 30,
  grabCursor: true,
  breakpoints: {
    320: {
      slidesPerView: 2,
    },
    576: {
      slidesPerView: 3,
    }
  },
  speed: 1000,
  autoplay: {
    delay: 4000,
  },
  loop: true,
});

const swiperClients = new Swiper('.swiper--clients', {
  spaceBetween: 30,
  grabCursor: true,
  breakpoints: {
    320: {
      slidesPerView: 2,
    },
    576: {
      slidesPerView: 3,
    }
  },
  speed: 3000,
  autoplay: {
    delay: 4000,
  },
  loop: true,
});

const swiperLizing = new Swiper('.swiper--lizing', {
  slidesPerView: 2,
  grabCursor: true,
  navigation: {
    nextEl: '.lizing__btn-next',
    prevEl: '.lizing__btn-prev',
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    576: {
      slidesPerView: 2,
    }
  },
  speed: 1000,
  autoplay: {
    delay: 3000,
  },
  loop: true,
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
  breakpoints: {
    320: {
      slidesPerView: 1.2,
      slidesPerGroup: 1,
      spaceBetween: 15,
    },
    576: {
      slidesPerView: 2,
      slidesPerGroup: 2,
    },
    768: {
      slidesPerView: 2,
      slidesPerGroup: 2,
    },
    1024: {
      slidesPerView: 3,
      slidesPerGroup: 3,
    }
  },
});

const swiperNews = new Swiper('.swiper--news', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2.5,
  },
  speed: 1500,
  autoplay: {
    delay: 3000,
  },
  loop: true,
});



const swiperReviews = new Swiper('.swiper--reviews', {
  slidesPerView: 3,
  spaceBetween: 30,
  navigation: {
    nextEl: '.reviews__btn-next',
    prevEl: '.reviews__btn-prev',
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    375: {
      slidesPerView: 2,
    },
    576: {
      slidesPerView: 3,
    }
  },
  speed: 3000,
  autoplay: {
    delay: 5000,
  },
  loop: true,
});
