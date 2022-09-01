const swipers = new Swiper(".mySwiper3", {
    breakpoints: {
      320:{
        slidesPerView: 1,
        spaceBetween: 5
      },
          570:{
            slidesPerView: 2,
            spaceBetween: 10
          },
        },
        
        // And if we need scrollbar
        scrollbar: {
          el: ".swiper-scrollbar",
          hide: true,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable:true,
        },
      
      });
    
     