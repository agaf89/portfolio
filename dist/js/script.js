const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
const closes = document.querySelector('.menu__close');
const overlay = document.querySelector('.menu__overlay');

function toggleClass(listener){
    listener.addEventListener('click',()=>{
        menu.classList.toggle('active');
    });
}
toggleClass(hamburger);
toggleClass(closes);
toggleClass(overlay);
