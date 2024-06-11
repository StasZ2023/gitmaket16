let types__swiper = document.querySelector('.types__swiper')
if (document.documentElement.clientWidth < 768) {
    types__swiper.classList.add("swiper");
  }
  const mySwiper2 = new Swiper(".swiper", {
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
  