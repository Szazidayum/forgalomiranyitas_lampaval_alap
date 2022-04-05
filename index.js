window.addEventListener("load",init);

function $(elem){
    return document.querySelectorAll(elem);
}
function CLASS(elem){
    return document.getElementsByClassName(elem);
}

var allapot = false;

function init(){
    var autoElem = $(".auto")[0];
    var lapma = $(".lampa")[0];
    var piros = $(".piros")[0];
    var sarga = document.querySelector(".sarga");
    var zold = document.querySelector(".zold");
    sarga.style.opacity="20%";
    zold.style.opacity="20%";

    setInterval(()=>{
        sarga.style.opacity = "100%";
        zold.style.opacity = "20%";
    },1000);
    setInterval(function(){
        if(allapot){
            zold.style.opacity="20%";
            piros.style.opacity="100%";
            sarga.style.opacity="20%"
        }else{
            zold.style.opacity="100%";
            piros.style.opacity="20%";
            sarga.style.opacity="20%";
            autoElem.classList.add("balroljobbra");
            autoElem.style.animationDuration="1s";
        }
        allapot=!allapot
    },2000);



}


