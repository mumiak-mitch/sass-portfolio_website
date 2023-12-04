const menuBtn = document.querySelector('.menu-btn');
const menuItem = document.querySelector('.menu-btn__item');
const nav = document.querySelector('.nav');
const menuNav = document.querySelector('.menu-nav');
const navItem = document.querySelectorAll('.menu-nav__item');

let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
    if(!showMenu) {
        menuItem.classList.add('open');
        nav.classList.add('open');
        menuNav.classList.add('open');
        navItem.forEach(item => { item.classList.add('open') });

        showMenu = true;
    } else {
        menuItem.classList.remove('open');
        nav.classList.remove('open');
        menuNav.classList.remove('open');
        navItem.forEach(item => { item.classList.remove('open') });

        showMenu = false;
    }
}