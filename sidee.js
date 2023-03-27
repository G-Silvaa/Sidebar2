

const btnMobile = document.querySelector('.btn_icon_header')
var navigationHeader = document.getElementById('navigation-header');

function toggleMenu() {
    navigationHeader.classList.toggle('active');
    
}

btnMobile.addEventListener('click', toggleMenu)

