var swiper = new Swiper(".swiperHome-main", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
var swiper = new Swiper(".swiperHome-cardMiniatur", {
  slidesPerView: 3,
  spaceBetween: 30,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  spaceBetween: 30,
});
var swiper = new Swiper(".homeNew", {
  slidesPerView: 2,
  spaceBetween: 30,
  navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
  },
    });