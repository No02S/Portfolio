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

export default toggleSlide;