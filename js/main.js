const buttonHeaderMenu = document.getElementById('header-button-menu');
const iconHeaderMenuBack = document.getElementById('header-icon-back');
const iconHeaderMenu = document.getElementById('header-icon-menu');

const buttonFooterMenu = document.getElementById('footer-menu-button');
const iconFooterMenuLeft = document.getElementById('footer-icon-left');
const iconFooterMenuRight = document.getElementById('footer-icon-right');
    
buttonHeaderMenu.onclick = function(){
    iconHeaderMenuBack.classList.toggle('display-none');
    iconHeaderMenu.classList.toggle('display-none');
}

buttonFooterMenu.onclick = function(){
    iconFooterMenuLeft.classList.toggle('display-none');
    iconFooterMenuRight.classList.toggle('display-none');
}