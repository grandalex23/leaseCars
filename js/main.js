// swiper расположили вниз т.к. main.js:3 Uncaught ReferenceError: Swiper is not defined
// и на страницах отличных от главной swiper отсутсвует
// а код выше swiper -  исполняется

const tabItem = document.querySelectorAll(".tabs-btn__item")
const tabContent = document.querySelectorAll(".tabs-content__item")

// повесили слушаель на .tabs-btn__item по собитию "клик"
tabItem.forEach(function (el) {
  el.addEventListener("click", open)
})

function open(event) {
  // то на что нажали сейчас
  const tabTarget = event.currentTarget;

  tabItem.forEach(function (item) {
    // убираем класс active каждому
    item.classList.remove("tabs-btn__item--active");
  })

  // а текущему ставим класс active
  tabTarget.classList.add("tabs-btn__item--active");

}

// autoplay - автосмена слайдов, основной код нах-ся в библиотеке

const swiper = new Swiper(".swiper", {
  speed: 2000,
  pagination: {
    el: ".swiper-pagination",
  },
  autoplay: {
    delay: 15000,
    disableOnInteraction: false,
  },
  effect: "fade",
  fadeEffect: {
    crossFade: true
  },

});
