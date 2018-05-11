var navMain = document.querySelector(".header-nav");
var navToggle = navMain.querySelector(".header-nav__toggle");

var orderButtons = document.querySelectorAll('.btn_order');
var orderPopup = document.querySelector('.modal');
var overlayPopup = document.querySelector('.modal-overlay');

navMain.classList.remove("header-nav--nojs");

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains("header-nav--closed")) {
    navMain.classList.remove("header-nav--closed");
    navMain.classList.add("header-nav--opened");
  } else {
    navMain.classList.add("header-nav--closed");
    navMain.classList.remove("header-nav--opened");
  }
});

for (var i = 0; i < orderButtons.length; i++) {
  orderButtons[i].addEventListener('click', function(evt) {
    orderPopup.classList.add('modal__show');
    overlayPopup.classList.add('modal-overlay__show');
    evt.preventDefault();
  })
}

overlayPopup.addEventListener('click', function(evt) {
  orderPopup.classList.remove('modal__show');
  overlayPopup.classList.remove('modal-overlay__show');
  evt.preventDefault();
})
