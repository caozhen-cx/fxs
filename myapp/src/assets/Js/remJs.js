(function(win){
    let docEl = win.document.documentElement;
    let time;


    function refreshRem(){
        let width = docEl.clientWidth;
        if(width>768) {
            // 最大宽度
            width= 768;
        }
        let rem = width / 7.5;
        docEl.style.fontSize = rem +'px';
    }

    win.addEventListener("resize",function(){
        clearTimeout(time);
        time = setTimeout(refreshRem,1);
    },false);
    win.addEventListener("pageshow",function(e){
        clearTimeout(time);
        time = setTimeout(refreshRem,1);
    },false);
    refreshRem();
})(window);