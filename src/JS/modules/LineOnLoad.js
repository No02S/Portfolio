function hrsStart() {
    const hrs = { 
        vertAbout:document.querySelector('.hrs__vertical_about'),
        horAbout: document.querySelector('.hrs__horizontal_about'),
        vertUnder: document.querySelector('.hrs__vertical_about-undertitle'),
        vertAboutRight: document.querySelector('.hrs__vertical_about-right'),
    };

    document.querySelectorAll('hr','.hrs').forEach(line =>{
        line.style.display = "inline";
    });

    if (document.documentElement.clientWidth <= 768) { 
        if (document.documentElement.clientWidth <= 600) {
            reSize("169px","calc(100% - 41px)","30px","calc(100% - 67px)");
        } else {
            reSize("169px","calc(100% - 75px)","30px","calc(100% - 67px)");
        }
    } else {
        if (document.documentElement.clientWidth <= 1186) { 
            reSize("220px","calc(100% - 75px)","16px","calc(100% - 119px)");
        } else {
            reSize("220px","calc(100% - 52px)","16px","calc(100% - 119px)");
        }
    }

    function reSize (value1,value2,value3,value4) {
        timeOut(hrs.vertAbout,"height",2750,value1);
        timeOut(hrs.horAbout,"width",4750,value2);
        timeOut(hrs.vertUnder,"height",5300,value3);
        timeOut(hrs.vertAboutRight,"height",6750,value4);
        function timeOut (stroke,nav,delay,value) {
            setTimeout(function (){
                if (nav == "height") { 
                    stroke.style.height = value;
                } else if (nav =="width") { 
                    stroke.style.width = value;
                }
            },delay);
        }   
    }
}

export default hrsStart;