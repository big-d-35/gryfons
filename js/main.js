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

//ССЫЛКИ
const linkHomePage = document.getElementById('link-home-page');
const linkFormPage = document.getElementById('link-home-page');
const linkMediaPage = document.getElementById('link-home-page');


//ССЫЛКИ

buttonHeaderMenu.onclick = function(){
    pageHome.classList.remove('page-active');
    pageForm.classList.remove('page-active');
    pageMedia.classList.remove('page-active');
    
    
    pageMenu.classList.add('page-active');
    
}

linkHomePage.onclick = function(){
    
    pageMenu.classList.remove('page-active');
    pageHome.classList.add('page-active');
}

linkFormPage.onclick = function(){
    
    let activePage = document.getElementsByClassName('page-active');
    let thisActivePage = activePage[0];
    
    thisActivePage.classList.remove('page-active');
    pageForm.classList.add('page-active');
}
