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

document.querySelector('.Prev').onclick = function () {
    slider.goTo('prev');
};

document.querySelector('.Next').onclick = function () {
    slider.goTo('next');
};