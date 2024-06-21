  document.addEventListener('DOMContentLoaded', function() {    
    const swiper = new Swiper('.swiper', {
      loop: true,
      slidesPerView: 3,
      centeredSlides: true,
      // 슬라이드 밑 ...
      pagination: {
        el: '.swiper-pagination',
      },

      // prev next btn
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }, 
      
    });
  });


