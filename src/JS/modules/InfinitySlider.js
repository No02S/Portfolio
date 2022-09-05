
function infinitySlider ({slider,wrapper,prev,next,activeSlides,delayMs}) {
    const wrapp = document.querySelector(slider.replace(/^/,'.')),
          itemsBar = wrapp.querySelector(wrapper.replace(/^/,'.')),
          goLeft = wrapp.parentElement.querySelector(prev.replace(/^/,'.')),
          goRight = wrapp.parentElement.querySelector(next.replace(/^/,'.')),
          wrapperWidth = +(+window.getComputedStyle(wrapp).width.replace(/[^.\d]/ig, '')).toFixed();
    
    itemsBar.childNodes.forEach(item=>{
        item.style.width = wrapperWidth/activeSlides + 'px';
    });
    itemsBar.prepend(itemsBar.lastElementChild);
    itemsBar.style.transform = `translateX(-${itemsBar.firstElementChild.style.width})`;

    nextSlide(goLeft,"ArowLeft");
    
    nextSlide(goRight,"ArowRight");

        
    function nextSlide (arrow,nav) {
        let itemWidth = +(+itemsBar.firstElementChild.style.width.replace(/[^.\d]/ig, '')).toFixed();
        arrow.style.animation = "0";
        arrow.addEventListener('click', ()=>{
            arrow.style.animation = "";
            arrow.style.animationDuration = `${delayMs}ms`;
            arrow.disabled = true;
            arrow.addEventListener('animationend', ()=>{
                arrow.style.animation = "0";
                arrow.disabled = false;
            });
            if (nav == "ArowLeft") {
                itemsBar.style.transition = `${delayMs}ms all`;
                itemsBar.style.transform = `translateX(-${itemWidth*2}px)`;
                setTimeout(()=>{
                    itemsBar.style.transition = '0s all';
                    itemsBar.style.transform = `translateX(-${itemWidth}px)`;
                    itemsBar.append(itemsBar.firstChild);
                },delayMs);
            }
            if (nav == "ArowRight") {
                itemsBar.style.transition = `${delayMs}ms all`;
                itemsBar.style.transform = `translateX(${0}px)`;
                setTimeout(()=>{
                    itemsBar.style.transition = '0s all';
                    itemsBar.style.transform = `translateX(-${itemWidth}px)`;
                    itemsBar.prepend(itemsBar.lastElementChild);
                },delayMs);
                
            }
            
        });
    }
}



export default infinitySlider;