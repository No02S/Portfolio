const slider = tns({
    container: '.slider',
    items: 1,
    slideBy: 'page',
    nav: false,
    controls: false,
    responsive: {
        769: {
           
        }   
    }
});
const hamburger = document.querySelector('.header__hamb'),
        menu = document.querySelector('.menu'),
        blackout = document.querySelector('.navigation__blackout'),
        close = document.querySelector('.menu__close'),
        menufer = document.querySelectorAll('.menu__ref');

hamburger.addEventListener('click', function() {
    menu.classList.add('active');
    blackout.classList.add('active');
});

close.addEventListener('click', () => {
    menu.classList.remove('active');
    blackout.classList.remove('active');
});

menufer.forEach(function (item) {
    item.addEventListener('click', function() {
        menu.classList.remove('active');
        blackout.classList.remove('active');
    });
});

document.querySelector('.Prev').onclick = function () {
    slider.goTo('prev');
};

document.querySelector('.Next').onclick = function () {
    slider.goTo('next');
};

$(document).ready(function() {
    $('form').submit(function(e) {
        e.preventDefault();
        $.ajax({
            type: "POST", 
            url:"../mailer/smart.php",
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
});