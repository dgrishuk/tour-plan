$(document).ready(function () {
  var hotelSlider = new Swiper(".hotel-slider", {
    // Optional parameters
    loop: true,

    // Navigation arrows
    navigation: {
      nextEl: ".hotel-slider__button--next",
      prevEl: ".hotel-slider__button--prev",
    },

    // Листаем слайды кнопками
    keyboard: {
      enabled: true,
      onlyInViewport: false,
  },
  });
  var reviewsSlider = new Swiper(".reviews-slider", {
    // Optional parameters
    loop: true,

    // Navigation arrows
    navigation: {
      nextEl: ".reviews-slider__button--next",
      prevEl: ".reviews-slider__button--prev",
    },
  });

  // Мобильное меню
  var menuButton = $(".menu-button");
  menuButton.on("click", function () {
    $(".navbar-button").toggleClass("navbar-button--visible");
  });

  // Модальное окно
  var modalButton = $('[data-toggle=modal]');
  var clouseModalButton = $(".modal__close");
  modalButton.on('click',  openModal);
  clouseModalButton.on('click', closeModal);
  
  // Открытие окна
  function openModal() {
    var modalOverlay = $('.modal__overlay');
    var modalDialog = $('.modal__dialog');
    modalOverlay.addClass('modal__overlay--visible');
    modalDialog.addClass('modal__dialog--visible');
  }

  // Закрытие окна
  function closeModal(event) {
    event.preventDefault();
    var modalOverlay = $('.modal__overlay');
    var modalDialog = $('.modal__dialog');
    modalOverlay.removeClass('modal__overlay--visible');
    modalDialog.removeClass('modal__dialog--visible');
  }

  // Обработка форм
  $('.form').each(function() {
    $(this).validate({
    errorClass: "invalid",
    messages: {
      name: {
        required: "Please specify your name",
        minlength: "At least two letters"
      },
      email: {
        required: "We need your email address to contact you",
        email: "Your email address must be in the format of name@domain.com"
      },
      phone: {
        required: "Please specify your phone",
        minlength: "At least ten"
      },
      subscribe: {
        required: "We need your email address to contact you",
        minlength: "Your email address must be in the format of name@domain.com"
      },
    },
  });
  })
  // Маска телефона
  $('.phone_us').mask('+7(999)999-99-99');
  // Подключаем CSS анимацияю
  AOS.init();
});