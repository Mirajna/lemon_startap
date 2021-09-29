$(document).ready(function () {
    $('.mobile-menu').on('click', function () {
        $('.menu').slideToggle().css('right', '0px !important').css('left', 'auto');
    })

    function myFunction(x) {
        if (x.matches) {
            const swiper = new Swiper('.gallery', {
                loop: true,
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                slidesPerView: 1,
                spaceBetween: 60,
                speed: 400
            });
        } else {
            const swiper = new Swiper('.gallery', {
                loop: true,
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                slidesPerView: 4,
                spaceBetween: 30,
                speed: 400
            });
        }
      }
      
      var x = window.matchMedia("(max-width: 680px)")
      myFunction(x)
      x.addListener(myFunction)
})
