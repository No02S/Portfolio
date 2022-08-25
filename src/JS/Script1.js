'use strict';
const hamburger = document.querySelector('.header__hamb'),
        menu = document.querySelector('.menu'),
        blackout = document.querySelector('.navigation__blackout'),
        closee = document.querySelector('.menu__close'),
        menufer = document.querySelectorAll('.menu__ref'),
        portAnimBlocks = document.querySelectorAll('.portfolio__grid-item-wrap'),
        arrows = document.querySelectorAll('.skills__arow'),
        toolsAll = document.querySelector('.skills__tools'),
        toolsSvgs = toolsAll.querySelectorAll('svg');
window.onload = function () {
    document.body.classList.add('loaded');
};

new WOW().init();

hamburger.addEventListener('click', function() {
    menu.classList.add('active');
    blackout.classList.add('active');
});

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

//SKILLS-TOOLS SKILLS-TOOLS SKILLS-TOOLS SKILLS-TOOLS SKILLS-TOOLS SKILLS-TOOLS
let reloaditer = 0;
if (document.documentElement.clientWidth <= 600) { 
    reloadSlide(toolsSvgs,false);
    nextItem(arrows);
}
function reloadSlide (elem, ar) {
    let i = 0;
    if (ar == 1) {
        if (elem.length % 2 == 0) {
            console.log('ok');
            reloaditer += -4;
            if (reloaditer <0) {reloaditer += elem.length;}
        } else {
            if (reloaditer == 0) {reloaditer = elem.length -3; } else {
                reloaditer += -4;
            }
            if (reloaditer<0) {
                reloaditer = elem.length -1;
                i=1;
            }
        }
    }
    elem.forEach((item,j) => {
        if (j<reloaditer) {
            item.style.display ="none";
        } else if (i == 2) {
            item.style.display ="none";
        }
        if (j==reloaditer && i <2) {
            item.style.display = "block";
            item.style.transform = "translateX(0px)";
            if (ar == 0) {item.style.animation = "backInRight 0.5s";}
            if (ar == 1) {item.style.animation = "backInLeft 0.5s";}
            reloaditer++;
            if (reloaditer == elem.length) {reloaditer = 0;}
            i++;
        }
    });
}
function nextItem (arrow) {
    arrow.forEach((item, i)=>{
        item.addEventListener('click', ()=> {
            toolsSvgs.forEach(tool => {
                let disp = tool.style.display;
                if (disp == "block") {
                    if (i == 0) {
                        tool.style.transform = "translateX(-2000px)";
                    }
                    if (i == 1) {
                        tool.style.transform = "translateX(2000px)";
                    }
                }  
            });
            setTimeout(reloadSlide,250,toolsSvgs,i);
        });
    });
}
//SKILLS-TOOLS SKILLS-TOOLS SKILLS-TOOLS SKILLS-TOOLS SKILLS-TOOLS SKILLS-TOOLS
portAnimBlocks.forEach( (block,i) => {
    block.addEventListener('click', ()=>{
        if (i==0){
            document.location.href = '#HEAD';
        }
        if (i==1){
            window.open('GlobalOpt/index.html', '_blank');
        }
    });
    block.addEventListener('mouseenter', () => {
        block.classList.remove('animate__animated');
        block.style.animation = "headShake 1s";
        block.querySelectorAll('.Recursline').forEach(item =>{
            item.style.animationDuration = "4s";
        });
    });
    block.addEventListener('mouseleave', () =>{
        block.style.animation = "";
        block.querySelectorAll('.Recursline').forEach(item =>{
            item.style.animationDuration = "20s";
        });
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