

const btnMobile = document.querySelector('.btn_icon_header')
var navigationHeader = document.getElementById('navigation-header');

console.log(navigationHeader)

console.log(btnMobile)

function toggleMenu() {
    navigationHeader.classList.toggle('active');
    
}

btnMobile.addEventListener('click', toggleMenu)

