function sendForm () {
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
}

export default sendForm;