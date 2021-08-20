$(document).ready(function () {
  let currentFloor = 2;
  const counterUp = $('.counter-up');
  const counterDown = $('.counter-down');
  const floorPath = $('.home-image path');
// функция подкрашивания этажа
  const checkFloor = (usFloor) => {
    usCurrentFloor = usFloor.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false});
    $('.counter').text(usCurrentFloor);
    floorPath.removeClass('current-floor');
    $(`[data-floor=${usCurrentFloor}]`).addClass('current-floor');
  }

  // функция при наведении мышки на этаж
  floorPath.on('mouseover', function () {    
    currentFloor = $(this).attr('data-floor');
    $('.counter').text(currentFloor);
    checkFloor(currentFloor);
  });

  // срабатывание кнопки вверх
  counterUp.on('click', function () {
    if (currentFloor < 18) {
      currentFloor++;
      checkFloor(currentFloor);
    }
  });
// срабатывание кнопки вниз
  counterDown.on('click', function () {
    if (currentFloor > 2) {
      currentFloor--;
      checkFloor(currentFloor);
      }
  });




});