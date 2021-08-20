$(document).ready(function () {
  let currentFloor = 2;
  const counterUp = $('.counter-up');
  const counterDown = $('.counter-down');
  const floorPath = $('.home-image path');
  const modal = $('.modal');
  const modalCloseButton = $('.modal-close-button');
const viewFlatsButton =$('.view-flats');

  // функция подкрашивания этажа
  const checkFloor = (usFloor) => {
    usCurrentFloor = usFloor.toLocaleString('en-US', {
      minimumIntegerDigits: 2,
      useGrouping: false
    });
    $('.counter').text(usCurrentFloor);
    floorPath.removeClass('current-floor');
    $(`[data-floor=${usCurrentFloor}]`).addClass('current-floor');
  }


  const toggleModal = () => {
    modal.toggleClass('is-open');
  }

  floorPath.on('click', toggleModal);
  modalCloseButton.on('click', toggleModal);

  // функция при наведении мышки на этаж
  floorPath.on('mouseover', () => {
    currentFloor = $(this).attr('data-floor');
    $('.counter').text(currentFloor);
    floorPath.removeClass('current-floor');
    // checkFloor(currentFloor);
  });

  // срабатывание кнопки вверх
  counterUp.on('click', () => {
    if (currentFloor < 18) {
      currentFloor++;
      checkFloor(currentFloor);
    }
  });
  // срабатывание кнопки вниз
  counterDown.on('click', () => {
    if (currentFloor > 2) {
      currentFloor--;
      checkFloor(currentFloor);
    }
  });

viewFlatsButton.on('click', toggleModal);


});