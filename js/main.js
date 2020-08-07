$(document).ready(function () {
    $('.slider').slick({
        dots: true
    });
    $('.btn-form').click(function (event) {
        $('.section__wrapper-block').toggleClass('active');
    });
    $('.btn-cart').click(function (event) {
        $('.section__wrapper-block').removeClass('active');
    });
})