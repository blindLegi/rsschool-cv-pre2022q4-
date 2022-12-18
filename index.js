let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.menu');
let overlay = document.querySelector('.overlay');

const toggleMenu = () => {
    menuBtn.classList.toggle('active');
    menu.classList.toggle('active');
    overlay.classList.toggle('active');
}

menuBtn.addEventListener('click', toggleMenu);
menu.addEventListener('click', toggleMenu);
overlay.addEventListener('click', toggleMenu);