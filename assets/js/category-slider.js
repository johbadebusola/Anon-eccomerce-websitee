const swiper = new Swiper(".mySwiper2", {
  breakpoints: {
    320:{
      slidesPerView: 1,
      spaceBetween: 5
    },
        570:{
          slidesPerView: 2,
          spaceBetween: 20
        },
        900:{
          slidesPerView: 4,
          spaceBetween: 10
        }
      },
      
      // And if we need scrollbar
      scrollbar: {
        el: ".swiper-scrollbar",
        hide: true,
      },
    
    });
  
    const swiper4 = new Swiper(".mySwiper4", {
      // breakpoints: {
      //   320:{
      //     slidesPerView: 1,
      //     spaceBetween: 5
      //   },
      //       570:{
      //         slidesPerView: 2,
      //         spaceBetween: 20
      //       },
      //       900:{
      //         slidesPerView: 4,
      //         spaceBetween: 10
      //       }
      //     },
          
          // And if we need scrollbar
          scrollbar: {
            el: ".swiper-scrollbar",
            hide: true,
          },
          pagination: {
            el: ".swiper-pagination"
          }
        
        });
      