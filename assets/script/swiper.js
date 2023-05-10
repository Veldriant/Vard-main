var swiper = new Swiper(".swiperHome-main", {
  slidesPerView: 1,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
var swiper = new Swiper(".swiperHome-cardMiniatur", {
  slidesPerView: 1,
  breakpoints: {
            990: {
                slidesPerView: 3,
            },
    },
  spaceBetween: 30,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  spaceBetween: 30,
});
var swiper = new Swiper(".homeNew", {
  slidesPerView: 1,
  breakpoints: {
            990: {
                slidesPerView: 2,
            },
    },
  spaceBetween: 30,
  navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
  },
  
    });
  var swiper = new Swiper(".topTovarCart", {
      slidesPerView: 1,
      autoplay: {
        delay: 3500,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  var swiper = new Swiper(".swiper-cardMiniatur", {
  slidesPerView: 1,
  breakpoints: {
            990: {
                slidesPerView: 4,
            },
    },
  spaceBetween: 30,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  spaceBetween: 30,
});