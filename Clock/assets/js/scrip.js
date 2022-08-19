


setInterval(() => { 
let hours =document.querySelector(".hours")
let minutes =document.querySelector(".minutes")
let seconds =document.querySelector(".seconds")


let h= new Date().getHours();
let m= new Date().getMinutes();
let s= new Date().getSeconds();

hours.innerHTML=h;
minutes.innerHTML=m;
seconds.innerHTML=s; 
    
}, 1000);