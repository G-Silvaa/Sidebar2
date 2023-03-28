

const btnMobile = document.querySelector('.btn_icon_header')
var navigationHeader = document.getElementById('navigation-header');

function toggleMenu() {
    navigationHeader.classList.toggle('active');
    
}

btnMobile.addEventListener('click', toggleMenu)

var menuItem = document.querySelectorAll('.two-header')

function selectL(){
    menuItem.forEach((item)=>
    item.classList.remove('cor')
    )
    this.classList.add('cor')
}

menuItem.forEach((item)=>
item.addEventListener('click', selectL))

