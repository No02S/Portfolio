async function getData (url,item) {
    let result = await fetch(url)
        .then(data => data.json())
        .then(data =>{
            for(let key in data) {
                if(key == item) {
                    return data[key];
                }
            }
        });
    return await result;
}
async function elementForSlider (url,sea) {
    await getData(url,sea)
        .then(data  =>{
            data.forEach(element => {
                let item = document.createElement('div');
                item.classList.add('skills_tools-item');
                item.innerHTML = element.svg;
                document.querySelector('.skills__tools').append(item);
            });
        });
}
export default elementForSlider;
