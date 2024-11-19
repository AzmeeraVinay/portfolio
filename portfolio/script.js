const menuicon =document.querySelector('#menu-icon');
const navbar =document.querySelector('.navbar');

menuicon.onclick = () => {
    menuicon.classlist.toggle('bx-x');
    navbar.classlist.toggle('active');
}