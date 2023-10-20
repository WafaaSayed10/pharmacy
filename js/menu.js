var close = document.querySelector(".closeee");
var menu = document.querySelector(".mmenu");
var imenu = document.querySelector(".icon");
close.addEventListener("click", ()=>{
    menu.style.display="none";
});
imenu.addEventListener("click", ()=>{
    menu.style.display="block";
});
imenu.addEventListener("dblclick", ()=>{
    menu.style.display="none";
});
