

window.addEventListener("scroll",function(){
    var header = document.querySelector("nav");
    header.classList.toggle("sticky",window.scrollY>0);
});



var typed =new Typed ('.typing',{
    strings:[
        "Developer",
        "Designer",
        "Learner",
    ],
    typeSpeed:100,
    backspeed:50,
    loop:true
})

const navToggle =document.querySelector("#navbar-toggle");
const links = document.querySelector(".menu");
navToggle.addEventListener("click",function(){
    links.classList.toggle("show-links");
})


var typed =new Typed ('#typing',{
    strings:[
        "Developer",
        "Designer",
        "Learner",
    ],
    typeSpeed:100,
    backspeed:50,
    loop:true
})


