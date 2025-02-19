const swiper = new Swiper('.swiper', {
  grabCursor: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  autoplay: {
    delay: 8000,
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 18
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 18
    },
    1188: {
      slidesPerView: 3,
      spaceBetween: 24
    }
  }
});