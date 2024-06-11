
let swiper = document.querySelector(".slider");
let swiper_slide = document.querySelector(".swiper-slide");
if (document.documentElement.clientWidth < 768) {
  swiper.classList.add("swiper");
  swiper_slide.style.width = "230px";
}

const mySwiper = new Swiper(".swiper", {
  breakpoints: {
    320: {
      slidesPerView: 1.3,
      breakpointsBase: "container",
    },
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

let all = document.querySelector(".all");
let slider = document.querySelector(".slider__items");

all.addEventListener("click", function (evt) {
  evt.preventDefault();

  all.classList.toggle('arrow__bottom')
  all.classList.toggle('arrow__top')

  if (all.textContent == "Скрыть") {
    all.textContent = "Показать все";
    slider.style.height = "180px";
  } else if (all.textContent == "Показать все") {
    all.textContent = "Скрыть";
    slider.style.height = "auto";
  }
});
