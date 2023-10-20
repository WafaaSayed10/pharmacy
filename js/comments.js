var viewall=document.querySelector(".allcomments");
var allcomments=document.querySelector(".cont");
viewall.addEventListener("click",()=>{
    allcomments.style.cssText="display: block";
});


var comment= document.querySelector(".commenttt");
var input= document.querySelector("input");
input.addEventListener("focus",()=>{
    comment.style.cssText = "box-shadow: 5px 5px 10px #257a7a ";
});
input.addEventListener("blur",()=>{
    comment.style.cssText = "box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.408)";
});


var xicon=document.querySelector(".xicon");
xicon.addEventListener("click",()=>{
    allcomments.style.display="none";
});

var send = document.querySelector(".send");
var feedback = document.querySelector("input");
var namee = document.querySelector(".me");

send.addEventListener("click", ()=>{
    /*if(feedback.innerText.length > 0){*/
        let newEl= document.createElement("div");
        newEl.className='comment-cardd';
        newEl.innerHTML='<p class=\"commentt\">' + '<span>' + namee.innerText +'</span>' + '<br>' + feedback.innerText + '</p>';
        let totalCommentss=document.querySelector(".total-commentss");
        totalCommentss.appendChild(newEl);
    /*};*/
});
