'use strict';
import elementForSlider from './modules/services/ElementCreate';
import   infinitySlider from './modules/InfinitySlider';
import      toggleSlide from './modules/SkillsSwaper';
import        hamburger from './modules/hamburger';
import        portfolio from './modules/PortfolioAnim';
import         hrsStart from './modules/LineOnLoad';
import         sendForm from './modules/FormISocialPanel';


window.onload = function () {
    document.body.classList.add('loaded');
};

$(document).ready(async function() {

    new WOW().init();

    hrsStart();
    hamburger();
    portfolio();
    await elementForSlider('./DATA.json', 'slider-items');
    
    if(document.documentElement.clientWidth <= 768) {
        let sli = 4;
        if(document.documentElement.clientWidth <= 500) {
            sli = 2;
        } 
        if (document.documentElement.clientWidth <=380) {
            document.querySelectorAll('.skills__arow').forEach(arow =>{
                arow.querySelector('svg').setAttribute('viewBox','0 0 24 24');
            });
        }
        infinitySlider({
            slider: "skills__wraper-overflow",
            wrapper:"skills__tools",
            prev:"skills__arow_left",
            next:"skills__arow_right",
            activeSlides: sli,
            delayMs: 300
        });
    } 
     

    
    toggleSlide('.skills-more');
    sendForm();

});

