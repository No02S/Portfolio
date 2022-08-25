'use strict';
let sItems = document.querySelectorAll('.Slider__item');
let swapItem = [];

 const sLeft = document.querySelector('.Slider__slide-left'), 
    sRight = document.querySelector('.Slider__slide-right');

const Close = document.querySelectorAll('.close'),
    menuCall = document.querySelector('#CallForm'),
    btnPhone = document.querySelectorAll('.NUMBER'),
    btnForm = document.querySelectorAll('.buttons_form'),
    menuThanks = document.querySelector('#Thanks'),
    hamb = document.querySelector('.head__hamb'),
    hambItems = document.querySelectorAll('.head__menu-items');

document.querySelector('#btnTakeCalc').addEventListener('click', () =>{
    document.location = '#Consult';
});

document.querySelectorAll('.btnPrice').forEach(btn =>{
    btn.addEventListener('click', ()=>{
        document.location = '#QuestForm';
    });
});

hamb.addEventListener('click', ()=> {
    if (!hamb.classList.contains('hambActive')) {
        hamb.classList.add('hambActive');
        document.querySelector('.blackout__Menu').style.opacity = 1;
        document.querySelector('.blackout__Menu').style.display = "block";
        document.querySelector('.head__menu').classList.add('ActiveMenu');
    } else {
        hamb.classList.remove('hambActive');
        fadeOut(document.querySelector('.blackout__Menu'));
        document.querySelector('.head__menu').classList.remove('ActiveMenu');
    }
});
hambItems.forEach(item =>{
    item.addEventListener('click', () =>{
        hamb.classList.remove('hambActive');
        fadeOut(document.querySelector('.blackout__Menu'));
        document.querySelector('.head__menu').classList.remove('ActiveMenu');
    });
});

btnPhone.forEach(item => {
    item.addEventListener('click', ()=> {
        menuCall.classList.add('callActive');
        document.querySelector('.callActive').style.opacity = 1;
    });
});

Close.forEach(item => {
    item.addEventListener('click', ()=> {
        fadeOut(item.parentElement.parentElement);
    });
});

btnForm.forEach(item => {
    item.addEventListener('click', (e) => {
        let valid = true;
        item.parentElement.querySelectorAll('input').forEach(stroke => {
            if (!stroke.checkValidity()) {
                valid = false;
            }
            if (item.parentElement.querySelector('textarea')) {
                if (!item.parentElement.querySelector('textarea').checkValidity()) {
                    valid = false; 
                }
            }
        });
        if (valid == true) {
            e.preventDefault();
            if (menuCall.classList.contains('callActive')) {
                fadeOut(menuCall);
            }
            menuThanks.classList.add('callActive');
            menuThanks.style.opacity = 1;
        }   
    });
});

slaidClick(sLeft, 1);
slaidClick(sRight, 0);

function slaidClick (arrow, flag) {
    arrow.addEventListener('click', () => {
        sItems.forEach((item,i)=>{
            swapItem[i] = item.innerHTML;
        });
        if (flag) {
            sItems[1].innerHTML = swapItem[2];
            sItems[0].innerHTML = swapItem[1];
            sItems[2].innerHTML = swapItem[0];
            if (sItems[1].classList.contains('animLeft1')) {
                sItems[1].classList.remove('animLeft1');
                sItems[1].classList.add('animLeft2');
            } else if (sItems[1].classList.contains('animLeft2')) {
                sItems[1].classList.remove('animLeft2');
                sItems[1].classList.add('animLeft1');
            } else {
                sItems[1].classList.add('animLeft1');
            }
            sItems[1].classList.remove('animRight1', 'animRight2');
        } else {
            sItems[1].innerHTML = swapItem[0];
            sItems[0].innerHTML = swapItem[2];
            sItems[2].innerHTML = swapItem[1];
            if (sItems[1].classList.contains('animRight1')) {
                sItems[1].classList.remove('animRight1');
                sItems[1].classList.add('animRight2');
            } else if (sItems[1].classList.contains('animRight2')) {
                sItems[1].classList.remove('animRight2');
                sItems[1].classList.add('animRight1');
            } else {
                sItems[1].classList.add('animRight1');
            }
            sItems[1].classList.remove('animLeft1', 'animLeft2');
        }
    });
}

function fadeOut (elem) {
    let op = 1;
    elem.style.opacity = op;
    let timer = setInterval(function() {
        if (elem.style.opacity < 0.1) {
            clearInterval(timer);
            elem.classList.remove('callActive');
            document.querySelector('.blackout__Menu').style.display = "none";
        }
        op = op - 0.1;
        elem.style.opacity = op;
    }, 20);
}


