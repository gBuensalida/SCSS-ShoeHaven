const darkBG = document.querySelector(".dark__bg");

const headerNav = document.querySelector(".header__nav");
const burgerBtn = document.querySelector(".burger__btn");
burgerBtn.addEventListener("click", () => {
    headerNav.classList.toggle("open");
    darkBG.classList.toggle("open");
})

const headerClose = document.querySelector(".header__close");
headerClose.addEventListener("click", () => {
    headerNav.classList.toggle("open");
    darkBG.classList.toggle("open");
})

const loginWindow = document.querySelector(".header__login__window");
const loginIcon = document.querySelector(".header__login i")
loginIcon.addEventListener("click", () => {
    loginWindow.classList.toggle("open");
    darkBG.classList.toggle("open");
})

const loginClose = document.querySelector(".header__login__close span");
loginClose.addEventListener("click", () => {
    loginWindow.classList.toggle("open");
    darkBG.classList.toggle("open");
})

const searchBar = document.querySelector(".header__search__bar");
const searchClose = document.querySelector(".header__search__bar i");
searchClose.addEventListener("click", () => {
    searchBar.classList.toggle("open");
})

const searchIcon = document.querySelector(".header__search i");
searchIcon.addEventListener("click", () => {
    searchBar.classList.toggle("open");
})

const cartWindow = document.querySelector(".header__cart__window");
const cartIcon = document.querySelector(".header__cart i");
cartIcon.addEventListener("click", () => {
    cartWindow.classList.toggle("open");
    darkBG.classList.toggle("open");
})

const cartClose = document.querySelector(".cart__top i");
cartClose.addEventListener("click", () => {
    cartWindow.classList.toggle("open");
    darkBG.classList.toggle("open");
})