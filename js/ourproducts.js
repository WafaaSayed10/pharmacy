var searchh= document.querySelector(".searchh");
var search= document.querySelector("input");
search.addEventListener("focus",()=>{
    searchh.style.cssText = "box-shadow: 5px 5px 10px #257a7a ";
});
search.addEventListener("blur",()=>{
    searchh.style.cssText = "box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.408)";
});

let more=document.querySelectorAll(".more")
more.forEach(btn => {
    btn.addEventListener("click",function(e){
        e.preventDefault();
        setTimeout(()=>{
            window.location="product.html";
        },1)
    })
});

var page = document.querySelector(".main-content");
page.addEventListener("click", ()=>{
    menu.style.display="none";
})