'use strict';
import toggleSlide from './modules/SkillsSwaper';
import   hamburger from './modules/hamburger';
import   portfolio from './modules/PortfolioAnim';
import    hrsStart from './modules/LineOnLoad';
import    sendForm from './modules/FormISocialPanel';

window.onload = function () {
    document.body.classList.add('loaded');
};

$(document).ready(function() {

    new WOW().init();

    hrsStart();
    hamburger();
    portfolio();
    toggleSlide('.skills-more');
    sendForm();

});

