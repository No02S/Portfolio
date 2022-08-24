'use strict';
const slider = tns({
    container: '.slider',
    items: 1,
    slideBy: 'page',
    nav: true,
    controls: false,
    responsive: {
        795: {
        nav:false
        }   
    }
});
const hamburger = document.querySelector('.header__hamb'),
        menu = document.querySelector('.menu'),
        blackout = document.querySelector('.navigation__blackout'),
        closee = document.querySelector('.menu__close'),
        menufer = document.querySelectorAll('.menu__ref');


window.onload = function () {
    document.body.classList.add('loaded');
}

hamburger.addEventListener('click', function() {
    menu.classList.add('active');
    blackout.classList.add('active');
});




document.querySelector('.Prev').onclick = function () {
    slider.goTo('prev');
};
document.querySelector('.Next').onclick = function () {
    slider.goTo('next');
};
closee.addEventListener('click', () => {
    menu.classList.remove('active');
    blackout.classList.remove('active');
});

menufer.forEach(function (item) {
    item.addEventListener('click', function() {
        menu.classList.remove('active');
        blackout.classList.remove('active');
    });
});
$(document).ready(function() {
    $('form').submit(function(e) {
        e.preventDefault();
        $.ajax({
            type: "POST", 
            url:"mailer/smart.php",
            data: $(this).serialize()
        }).done(function() {
            $(this).find("input").val("");
            $('#thanks').fadeIn('fast');
            $('form').trigger('reset');
        });
        return false;
    });
    $('.contacts__thanks-close').on('click', function() {
        $('#thanks').fadeOut('fast');
    });
    $('.header__social-vis').on('click', function() {
        $('.header__social-panel-grid').toggleClass('grid-active');
    });
    function toggleSlide(item) {
        $(item).each(function(i) {
            $(this).on('click', function() {
                if ($('.skills__item-descr').eq(i).hasClass('skills-active')) {
                    $('.skills__blackout').addClass('blackout-active');
                    $('.skills__item-descr').eq(i).removeClass('skills-active');
                    $('.skills__item-descr').eq(i).width();
                    $('.skills__item-descr').eq(i).addClass('skills-active2');
                    $('.skills-second').eq(i).delay(600).fadeIn('slow');
                    $('.skills-first').eq(i).fadeOut('slow'); 
                    $('.firstlink').eq(i).fadeOut('slow');
                    $('.secondlink').eq(i).delay(600).fadeIn('slow'); 
                } else if ($('.skills__item-descr').eq(i).hasClass('skills-active2')) {
                    $('.skills__blackout').removeClass('blackout-active');
                    $('.skills__item-descr').eq(i).removeClass('skills-active2');
                    $('.skills__item-descr').eq(i).width();
                    $('.skills__item-descr').eq(i).addClass('skills-active'); 
                    $('.skills-second').eq(i).fadeOut('slow');
                    $('.skills-first').eq(i).delay(600).fadeIn('slow'); 
                    $('.firstlink').eq(i).delay(600).fadeIn('slow');
                    $('.secondlink').eq(i).fadeOut('slow'); 
                }
            });
        });
    }
    toggleSlide('.skills-more');
});