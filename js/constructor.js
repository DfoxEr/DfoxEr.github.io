// Весь конструктор
const constructor = document.querySelector(".constructor");
const windows = constructor.querySelectorAll(".constructor-windows__window");
const bigImg = document.getElementById("constructor__bigImg");
const radioWindows = constructor.querySelectorAll("input[name='window-type']");
const windowSelected = document.getElementById("window-selected");
const dver = document.getElementById("dver");

windows.forEach((win) => {
    win.addEventListener("click", onWindowClick);
});

function onWindowClick(e) {
    dver.removeAttribute("disabled");
    windows.forEach((win) => {
        win.classList.remove("constructor-windows__window_selected");
    });

    e.target.classList.add("constructor-windows__window_selected");
    
    const winsArray = Array.prototype.slice.call(windows);
    

    let windowType = constructor.querySelector("input[name='window-type']:checked").value;

    bigImg.setAttribute("src","/img/constructor/okno"+(winsArray.indexOf(e.target)+1)+"/"+windowType+".jpg");

    windowSelected.value = "okno"+(winsArray.indexOf(e.target)+1)+"_"+windowType;

    // блокировка последнего радиобокса
    if ((winsArray.indexOf(e.target)+1) === 4) {

        dver.setAttribute("disabled", "disabled");
    }
}


radioWindows.forEach((elem, index) => {
    elem.addEventListener("change", function(e){

        const winsArray = Array.prototype.slice.call(windows);

        let windowIndex = winsArray.indexOf(constructor.querySelector(".constructor-windows").querySelector(".constructor-windows__window_selected"));

        let imgSrc = "/img/constructor/okno"+(windowIndex+1)+"/"+e.target.value+".jpg";

        bigImg.setAttribute("src", imgSrc);
        windowSelected.value = "okno"+(windowIndex+1)+"_"+e.target.value;

        // блокировка последнего окна
        if ((index+1) == 4) {
            windows[3].style.display = 'none';
        }
        else {
            windows[3].style.display = 'flex';

        }
    });
});