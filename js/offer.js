let order=document.querySelectorAll(".orderr")
order.forEach(btn => {
    btn.addEventListener("click",function(e){
        e.preventDefault();
        setTimeout(()=>{
            window.location="confirm.html";
        },1)
    })
});
let more=document.querySelectorAll(".more")
more.forEach(btn => {
    btn.addEventListener("click",function(e){
        e.preventDefault();
        setTimeout(()=>{
            window.location="offer.html";
        },1)
    })
});

var page = document.querySelector(".mainn-content");
page.addEventListener("click", ()=>{
    menu.style.display="none";
})