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
        close = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
    blackout.classList.add('active');
});

close.addEventListener('click', () => {
    menu.classList.remove('active');
    blackout.classList.remove('active');
});

document.querySelector('.Prev').onclick = function () {
    slider.goTo('prev');
};

document.querySelector('.Next').onclick = function () {
    slider.goTo('next');
};