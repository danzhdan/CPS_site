const callButton = document.querySelectorAll(".call-button");
const buttonCloseSidebar = document.querySelector(
  ".callback-form__button-close"
);
const callbackForm = document.querySelector(".callback-form__container");
const call = document.querySelector(".callback-form");
const bodyWrapper = document.querySelector(".body-wrapper");
const pageWrapper = document.querySelector(".page-wrapper");
const menuContainer = document.querySelector(".menu-container");
const body = document.querySelector("body");

function callbackFormShow(event) {
  {
    callButton.forEach((buttonCall) => {
      if (buttonCall === event.target) {
        if (innerWidth < 1366) {
          bodyWrapper.classList.add("body-wrapper_blur");
          pageWrapper.classList.add("page-wrapper_index");
        }

        if (innerWidth > 1366) {
          pageWrapper.classList.add("page-wrapper_blur");
        }
        callbackForm.classList.add("callback-form__container_block");
        menuContainer.classList.remove("menu-container_show");
        setTimeout(() => {
          callbackForm.classList.add("callback-form__container_show");
        }, 1);
      }
    });
  }
  if (body === event.target || buttonCloseSidebar === event.target) {
    bodyWrapper.classList.remove("body-wrapper_blur");
    pageWrapper.classList.remove("page-wrapper_blur");
    pageWrapper.classList.remove("page-wrapper_index");

    callbackForm.classList.remove("callback-form__container_show");
    setTimeout(() => {
      callbackForm.classList.remove("callback-form__container_block");
    }, 1000);
  }
}

document.addEventListener("click", callbackFormShow);
