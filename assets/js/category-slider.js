const swiper = new Swiper(".mySwiper2", {
  breakpoints: {
    320:{
      spaceBetween: 10
    },
        600:{
          slidesPerView: 2,
          spaceBetween: 10
        }
      },
      // And if we need scrollbar
      scrollbar: {
        el: ".swiper-scrollbar",
        hide: true,
      },
    });
  
   