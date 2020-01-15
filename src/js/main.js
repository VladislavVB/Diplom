if(!window.jQuery){
document.write('<script type="text/javascript" src="/js/lib/jquery.js"></script>')
}

$(document).ready(function () {

   

    //слайд
    var mySwiper = new Swiper ('.swiper-container', {
        // Optional parameters
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    })
});