var swiper = new Swiper(".swiperHome-main", {
      navigation: {
        nextEl: ".swiper-button-next" ,
        prevEl: ".swiper-button-prev",
      },
      loop:true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
 var swiper = new Swiper(".swiperHome-popular", {
      navigation: {
        nextEl: ".swiper-button-next" ,
        prevEl: ".swiper-button-prev",
      },
      slidesPerView: 4,
      spaceBetween: 30,
      centeredSlides: true,
    });