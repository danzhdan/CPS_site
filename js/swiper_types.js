import Swiper, { Pagination } from "swiper";
Swiper.use([Pagination]);

const slider = document.querySelector(".swiper-container_types");

function mobileSlider() {
  if (window.innerWidth <= 768) {
    const swiper = new Swiper(slider, {
      slidesPerView: "auto",
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  }
}

mobileSlider();
