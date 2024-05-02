// тут нам нужны 2 переменные. 1-я tab та на что мы будем нажимать
// и 2-я та что буде показыват вам контент

const tabItem = document.querySelectorAll(".tabs-btn__item") // найдем кнопки выбора типа авто
const tabContent = document.querySelectorAll(".tabs-content__item")

// повесили слушаель на .tabs-btn__item по собитию "клик"
tabItem.forEach(function (el) {
  el.addEventListener("click", open)
})

function open(event) {
  // то на что нажали сейчас
  const tabTarget = event.currentTarget;
  // переменная в которую запишем текущий дата атрибут (content-1 если нажали на 
  // button с контентом-1)
  const button = tabTarget.dataset.button;

  tabItem.forEach(function (item) {
    // убираем класс active каждому item
    item.classList.remove("tabs-btn__item--active");
  });

  // а текущему ставим класс active
  tabTarget.classList.add("tabs-btn__item--active");

  // переберем все .tabs-content__item 
  tabContent.forEach(function (item) {
    item.classList.remove("tabs-content__item--active") // убираем актив и тогда становится display grid none
  });

  // и присваиваем tabs-content__item--active тому button у которого соответсвующий дата атрибут data-content-*
  // но т.к. сначала надо найти button (контент) поэтому querySelector
  // # - это id в new-cars.html
  document.querySelector(`#${button}`).classList.add("tabs-content__item--active");

}
