const feedbackButton = document.querySelectorAll(".feedback-button");
const buttonCloseSidebar = document.querySelector(
  ".feedback-form__button-close"
);
const feedbackForm = document.querySelector(".feedback-form__container");
const bodyWrapper = document.querySelector(".body-wrapper");
const pageWrapper = document.querySelector(".page-wrapper");
const menuContainer = document.querySelector(".menu-container");
const body = document.querySelector("body");

function feedbackFormShow(event) {
  {
    feedbackButton.forEach((buttonFeedBack) => {
      if (buttonFeedBack === event.target) {
        if (innerWidth < 1366) {
          bodyWrapper.classList.add("body-wrapper_blur");
          pageWrapper.classList.add("page-wrapper_index");
        }

        if (innerWidth > 1366) {
          pageWrapper.classList.add("page-wrapper_blur");
        }
        feedbackForm.classList.add("feedback-form__container_block");
        menuContainer.classList.remove("menu-container_show");
        setTimeout(() => {
          feedbackForm.classList.add("feedback-form__container_show");
        }, 1);
      }
    });
  }
  if (body === event.target || buttonCloseSidebar === event.target) {
    bodyWrapper.classList.remove("body-wrapper_blur");
    pageWrapper.classList.remove("page-wrapper_blur");
    pageWrapper.classList.remove("page-wrapper_index");

    feedbackForm.classList.remove("feedback-form__container_show");
    setTimeout(() => {
      feedbackForm.classList.remove("feedback-form__container_block");
    }, 1000);
  }
}

document.addEventListener("click", feedbackFormShow);
