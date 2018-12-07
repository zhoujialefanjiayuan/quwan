//必须通过$(function(){})加载整个页面
$(function () {
    var topswiper = new Swiper('#topSwiper', {
        pagination: '.swiper-pagination',
        slidesPerView: 1,
        paginationClickable: true,
        spaceBetween: 30,
        loop: true,
        autoplay : 3000,
    });
})
