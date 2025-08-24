const navbar = document.querySelector('.navbar');
const navbarContent = document.querySelector('.navbarContent');

navbar.addEventListener('mouseenter', () => {
    navbarContent.style.left = '110px';
});

navbarContent.addEventListener('mouseenter', () => {
    navbarContent.style.left = '110px';
});

navbar.addEventListener('mouseleave', () => {
    navbarContent.style.left = '-240px';
});

navbarContent.addEventListener('mouseleave', () => {
    navbarContent.style.left = '-240px';
});