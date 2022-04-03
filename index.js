const btn = window.document.querySelector(".button-off");
const bulb = window.document.querySelector(".bulb-image");
const intens1 = window.document.querySelector(".intensity1");
const intens2 = window.document.querySelector(".intensity2");
let defaultValue = false;
intens1.style.display="none";
intens2.style.display="none";
btn.addEventListener("click",function(){
    if(defaultValue){
        defaultValue=false;
        bulb.src="./images/offbulb.png";
        btn.innerHTML="TURN ON";
         intens1.style.display="none";
         intens2.style.display="none";
    }
    else{
        defaultValue=true;
        bulb.src="./images/intensity1.jpeg";
        btn.innerHTML="TURN OFF";
        intens1.style.display="block";
        intens2.style.display="block";
    }
})
intens1.addEventListener("click",function(){
    bulb.src="./images/intensity1.jpeg";
})
intens2.addEventListener("click",function(){
    bulb.src="./images/intensity2.jpeg";
})