//КНОПКИ
const buttonHeaderMenu = document.getElementById('header-button-menu');
const iconHeaderMenuBack = document.getElementById('header-icon-back');
const iconHeaderMenu = document.getElementById('header-icon-menu');
const headerHomeButton = document.getElementById('header-home-button');

//КНОПКИ



//СТРАНИЦЫ
const pageHeader = document.getElementById('page-header');
const pageHome = document.getElementById('page-home');
const pageMenu = document.getElementById('page-menu');
const pageForm = document.getElementById('page-form');
const pageAbout = document.getElementById('page-about');
const pageMedia = document.getElementById('page-media');
const pageFooter = document.getElementById('page-footer');

//СТРАНИЦЫ


buttonHeaderMenu.onclick = function(){
    iconHeaderMenuBack.classList.toggle('display-none');
    iconHeaderMenu.classList.toggle('display-none');
    
    pageMenu.classList.toggle('display-none');
}

headerHomeButton.onclick = function() {
    pageMenu.classList.add('display-none');
    
    pageHome.classList.remove('display-none');
}
