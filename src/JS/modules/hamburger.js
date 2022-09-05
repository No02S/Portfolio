function hamburger () {
    const hamb = document.querySelector('.header__hamb'),
          menu = document.querySelector('.menu'),
          blackout = document.querySelector('.navigation__blackout');

    hamb.addEventListener('click', () =>{
        menu.classList.add('active');
        blackout.classList.add('active');
        hamb.style.zIndex = 7;
    });
    
    document.querySelector('.menu__close').addEventListener('click', () => {
        removeClasses ();
        hamb.style.zIndex = '';
    });
    
    document.querySelectorAll('.menu__ref').forEach(function (item) {
        item.addEventListener('click', function() {
            removeClasses ();
        });
    });

    function removeClasses () {
        menu.classList.remove('active');
        blackout.classList.remove('active');
    }
}

export default hamburger;