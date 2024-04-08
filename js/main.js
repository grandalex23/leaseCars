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