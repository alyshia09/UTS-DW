const header = document.querySelector('#menu-btn');
document.querySelector("menu-btn").onclick = () => {
    header.classList.toggle("active");
};

const menu = document.querySelector("menu-btn"); 

document.addEventListener("click"), function (e) {
    if (!menu.contains(e.target) && !header.contains(e.target)) {
        header.classList.remove("active");
    }
}
let navbar = document.querySelector('.header .navbar');

menu.onclick = () => {
    menu.classList.toggle('fas-times');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('fas-times');
    navbar.classList.remove('active');
}