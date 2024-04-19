var swiper1 = new Swiper(".mySwiper-section2", {
  slidesPerView: 1,
  spaceBetween: 24,
  freeMode: true,
  breakpoints: {
    1536: {
      slidesPerView: 3
    },
    1280: {
      slidesPerView: 2
    },
    1024: {
      slidesPerView: 1
    },
  },
  // pagination: {
  //   el: ".swiper-pagination",
  //   clickable: true,
  // },
});

function toggleMenu() {
  var menu = document.getElementById("menu");
  if (menu.classList.contains("hidden")) {
    menu.classList.remove("hidden");
    console.log("ok"); // Log 'ok' when the menu is shown
  } else {
    menu.classList.add("hidden");
  }
};