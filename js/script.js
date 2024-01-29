'use  strict';

const elemToggleFunc = function (elem) {
    elem.classList.toggle("active");
}


const navbar =  document.querySelector('[data-navbar]');
const overlay = document.querySelector("[data-overlay]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");
const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navLinks = document.querySelectorAll("[data-nav-link]");

const navElemArr = [overlay,navCloseBtn,navOpenBtn];

for (let i = 0; i < navLinks.length; i++) {
    navElemArr.push(navLinks[i]);
    
}


for (let i = 0; i < navElemArr.length; i++) {
    navElemArr[i].addEventListener("click",() => {
        elemToggleFunc(navbar);
        elemToggleFunc(overlay);
    })
    
}


const header = document.querySelector("[data-header]");

window.addEventListener("scroll", () => {
    window.scrollY >= 400 ? header.classList.add("active")
    : header.classList.remove("active");
})



































