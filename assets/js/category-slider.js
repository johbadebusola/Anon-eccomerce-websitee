const swiper = new Swiper(".mySwiper2", {
  breakpoints: {
    320:{
      slidesPerView: 1,
      spaceBetween: 5
    },
        600:{
          slidesPerView: 2,
          spaceBetween: 10
        },
        900:{
          slidesPerView: 3,
          spaceBetween: 10
        }
      },
      
      // And if we need scrollbar
      scrollbar: {
        el: ".swiper-scrollbar",
        hide: true,
      },
    
    });
  
   