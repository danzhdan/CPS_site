const buttonBurgerMenu = document.querySelector(".header__burger-button");
const buttonHeaderCall = document.querySelector(".header__call-button");
const buttonCloseMenu = document.querySelector(".menu-header__button-close");
const menuContainer = document.querySelector(".menu-container");
const bodyWrapper = document.querySelector(".body-wrapper");
const pageWrapper = document.querySelector(".page-wrapper");

function menuShow(event) {
  if (buttonBurgerMenu === event.target) {
    menuContainer.classList.toggle("menu-container_show");
    bodyWrapper.classList.toggle("body-wrapper_blur");
  }
  if (pageWrapper === event.target || buttonCloseMenu === event.target) {
    menuContainer.classList.remove("menu-container_show");
    bodyWrapper.classList.remove("body-wrapper_blur");
  }
}

document.addEventListener("click", menuShow);
