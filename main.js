const menu = document.getElementById('menu-mobile');
const ulMenu = document.getElementById('menu');
const icon = document.getElementById('icon-menu');

menu.addEventListener('click', e =>{
    e.preventDefault();
    ulMenu.classList.toggle('hide-menu');
    icon.classList.toggle('fa-align-right');
    icon.classList.toggle('fa-times');
});