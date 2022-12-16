const brandsBlock = document.querySelectorAll(".swiper-slide_brands");

const buttonBrands = document.querySelector(".swiper-slide__button-brands");

function handleToggleClick() {
  const textButton = buttonBrands.classList.contains(
    "swiper-slide__button_active"
  );

  buttonBrands.classList.toggle("swiper-slide__button_rotate");

  buttonBrands.classList.toggle("swiper-slide__button_active");

  if (!textButton) {
    buttonBrands.textContent = "Скрыть";
    for (let i = brandsBlock.length - 5; i < brandsBlock.length; i++) {
      brandsBlock[i].classList.add("swiper-slide_block");
      setTimeout(() => {
        brandsBlock[i].classList.add("swiper-slide_show");
      }, 1);
    }
  } else {
    buttonBrands.textContent = "Показать все";
    for (let i = brandsBlock.length - 5; i < brandsBlock.length; i++) {
      brandsBlock[i].classList.remove("swiper-slide_show");
      setTimeout(() => {
        brandsBlock[i].classList.remove("swiper-slide_block");
      }, 2);
    }
  }
}

buttonBrands.addEventListener("click", handleToggleClick);
