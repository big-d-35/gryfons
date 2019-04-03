const buttonHeaderMenu = document.getElementById('header-button-menu');
const iconHeaderMenuBack = document.getElementById('header-icon-back');
const iconHeaderMenu = document.getElementById('header-icon-menu');
const headerHomeButton = document.getElementById('header-home-button');

const pageHome = document.getElementById('page-home');
const pageMenu =document.getElementById('page-menu');


buttonHeaderMenu.onclick = function(){
    iconHeaderMenuBack.classList.toggle('display-none');
    iconHeaderMenu.classList.toggle('display-none');
    
    pageMenu.classList.toggle('display-none');
}

headerHomeButton.onclick = function() {
    pageMenu.classList.add('display-none');
    
    pageHome.classList.remove('display-none');
}
