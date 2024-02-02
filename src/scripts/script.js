function toggleMenu() {
  var menu = document.getElementById("menu");
  if (menu.classList.contains("hidden")) {
    menu.classList.remove("hidden");
    console.log("ok"); // Log 'ok' when the menu is shown
  } else {
    menu.classList.add("hidden");
  }
};


var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
  },
});

