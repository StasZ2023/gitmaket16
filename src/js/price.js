let price__swiper = document.querySelector('.price__swiper')
if (document.documentElement.clientWidth < 768) {
    price__swiper.classList.add("swiper");
  }
  const mySwiper3 = new Swiper(".swiper", {
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
  