function hamburger () {
    const menu = document.querySelector('.menu'),
          blackout = document.querySelector('.navigation__blackout');

    document.querySelector('.header__hamb').addEventListener('click', function() {
        menu.classList.add('active');
        blackout.classList.add('active');
    });
    
    document.querySelector('.menu__close').addEventListener('click', () => {
        removeClasses ();
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