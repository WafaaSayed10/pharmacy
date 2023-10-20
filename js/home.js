let shop=document.querySelector(".shop")
shop.addEventListener("click",function(e){
    e.preventDefault();
    setTimeout(()=>{
        window.location="ourproducts.html";
    },1)
})
let productsbtn=document.querySelector(".all-productsbtn")
productsbtn.addEventListener("click",function(e){
    e.preventDefault();
    setTimeout(()=>{
        window.location="ourproducts.html";
    },1)
})
let servicesbtn=document.querySelector(".servicesbtn")
servicesbtn.addEventListener("click",function(e){
    e.preventDefault();
    setTimeout(()=>{
        window.location="services.html";
    },1)
})
let offersbtn=document.querySelector(".offersbtn")
offersbtn.addEventListener("click",function(e){
    e.preventDefault();
    setTimeout(()=>{
        window.location="offers.html";
    },1)
})
let offerbtn=document.querySelector(".offerbtn")
offerbtn.addEventListener("click",function(e){
    e.preventDefault();
    setTimeout(()=>{
        window.location="offer.html";
    },1)
})
let healthTipsbtn=document.querySelector(".health-tipsbtn")
healthTipsbtn.addEventListener("click",function(e){
    e.preventDefault();
    setTimeout(()=>{
        window.location="healthTips.html";
    },1)
})


var links = document.querySelectorAll(".llink");

links.forEach((link)=>{
    link.addEventListener("click",()=>{
        links.forEach((link)=>{
            link.classList.remove("active");
        });
        link.classList.add("active");
    });
});
window.onscroll = function(){
    if(window.scrollY <= 499){
        links.forEach((link)=>{
            link.classList.remove("active");
        });
    }
    if(window.scrollY >= 500 && window.scrollY <= 1249){
        links.forEach((link)=>{
            link.classList.remove("active");
        });
        links[0].classList.add("active");
    }
    if(window.scrollY >= 1250 && window.scrollY <= 1600){
        links.forEach((link)=>{
            link.classList.remove("active");
        });
        links[1].classList.add("active");
    }
    if(window.scrollY >= 2000 && window.scrollY <= 2999){
        links.forEach((link)=>{
            link.classList.remove("active");
        });
        links[2].classList.add("active");
    }
    if(window.scrollY >= 2750 && window.scrollY <= 3499){
        links.forEach((link)=>{
            link.classList.remove("active");
        });
        links[3].classList.add("active");
    }
    if(window.scrollY >= 3500 && window.scrollY <= 4199){
        links.forEach((link)=>{
            link.classList.remove("active");
        });
        links[4].classList.add("active");
    }
    if(window.scrollY >= 4200 && window.scrollY <= 4800){
        links.forEach((link)=>{
            link.classList.remove("active");
        });
        links[5].classList.add("active");
    }
    if(window.scrollY >= 4801 && window.scrollY <= 5400){
        links.forEach((link)=>{
            link.classList.remove("active");
        });
        links[6].classList.add("active");
    }
};

/*
links.forEach((link)=>{
    window.onscroll = function(){
        links.forEach((link)=>{
            link.classList.remove("active");
        });
    };
    link.classList.add("active");
});
*/

var page = document.querySelector(".land");
page.addEventListener("click", ()=>{
    menu.style.display="none";
})

const slider=document.querySelector('.carddss');
const leftArrow=document.querySelector('.left');
const rightArrow=document.querySelector('.right');
const indicatorParents=document.querySelector('.controls ul');
var sectionIndex = 0;
rightArrow.addEventListener('click',function(){
    sectionIndex = (sectionIndex < 3) ? sectionIndex + 1 : 3;
    document.querySelector('.controls .selected').classList.remove('selected');
    indicatorParents.children[sectionIndex].classList.add('selected');
    slider.style.transform = 'translate(' + (sectionIndex) * -25 + '%)';
});
leftArrow.addEventListener('click',function(){
    sectionIndex = (sectionIndex > 0) ? sectionIndex - 1 : 0;
    document.querySelector('.controls .selected').classList.remove('selected');
    indicatorParents.children[sectionIndex].classList.add('selected');
    slider.style.transform = 'translate(' + (sectionIndex) * -25 + '%)';
});

document.querySelectorAll('.controls li').forEach(function(indicator, ind){
    indicator.addEventListener('click',function(){
        sectionIndex=ind;
        document.querySelector('.controls .selected').classList.remove('selected');
        indicator.classList.add('selected');
        slider.style.transform = 'translate(' + (sectionIndex) * -25 + '%)';
    });
});