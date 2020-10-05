const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
const closes = document.querySelector('.menu__close');
const overlay = document.querySelector('.menu__overlay');
const percent = document.querySelectorAll('.list__item-percent');
const divActive = document.querySelectorAll('.list__item-active');


function percentElement(){
    percent.forEach( (item,i) =>{
        divActive[i].style.width = item.textContent;
    });
}
function toggleClass(listener){
    listener.addEventListener('click',()=>{
        menu.classList.toggle('active');
    });
}
toggleClass(hamburger);
toggleClass(closes);
toggleClass(overlay);
percentElement();

