const typesBlock = document.querySelectorAll(".swiper-slide_types");

const buttonTypes = document.querySelector(".swiper-slide__button-types");

function handleToggleClick() {
  const textButton = buttonTypes.classList.contains(
    "swiper-slide__button_active"
  );

  buttonTypes.classList.toggle("swiper-slide__button_rotate");

  buttonTypes.classList.toggle("swiper-slide__button_active");

  if (!textButton) {
    buttonTypes.textContent = "Скрыть";
    for (let i = typesBlock.length - 5; i < typesBlock.length; i++) {
      typesBlock[i].classList.add("swiper-slide_block");
      setTimeout(() => {
        typesBlock[i].classList.add("swiper-slide_show");
      }, 1);
    }
  } else {
    buttonTypes.textContent = "Показать все";
    for (let i = typesBlock.length - 5; i < typesBlock.length; i++) {
      typesBlock[i].classList.remove("swiper-slide_show");
      setTimeout(() => {
        typesBlock[i].classList.remove("swiper-slide_block");
      }, 2);
    }
  }
}

buttonTypes.addEventListener("click", handleToggleClick);
