$(function() {

    var swiper = new Swiper('.vehicle__swiper', {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },

    });

    var swiper2 = new Swiper('.insta__inner', {
        slidesPerView: 3,
        spaceBetween: 30,
        freeMode: true,
        pagination: false
    });

});