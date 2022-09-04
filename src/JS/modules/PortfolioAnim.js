function portfolio () {
    const portAnimBlocks = document.querySelectorAll('.portfolio__grid-item-wrap');
    
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
}

export default portfolio;