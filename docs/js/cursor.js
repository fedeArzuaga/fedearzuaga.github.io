"use strict";

var cursor = document.querySelector("#cursor"),
    pointer = document.querySelector("#pointer"),
    dataMouseElements = Array.from(document.querySelectorAll('[data-mouse="hover"], a, .uk-dotnav, .icon'));

if (isTouchAvailable) {
  document.addEventListener('mousemove', function (e) {
    cursor.classList.add('on-screen');
    pointer.classList.add('on-screen');
    cursor.style.left = "".concat(e.clientX, "px");
    cursor.style.top = "".concat(e.clientY, "px");
    pointer.style.left = "".concat(e.clientX, "px");
    pointer.style.top = "".concat(e.clientY, "px");
  });
  document.addEventListener('mouseout', function () {
    cursor.classList.remove('on-screen');
    pointer.classList.remove('on-screen');
  });

  var _loop = function _loop(i) {
    dataMouseElements[i].addEventListener('mousemove', function (e) {
      if (dataMouseElements[i].classList.contains('icon')) {
        cursor.classList.add('hover-effect-for-icons');
        pointer.classList.add('hover-effect-for-icons');
      } else {
        cursor.classList.add('hover-effect');
        pointer.classList.add('hover-effect');
      }
    });
    dataMouseElements[i].addEventListener('mouseout', function (e) {
      if (dataMouseElements[i].classList.contains('icon')) {
        cursor.classList.remove('hover-effect-for-icons');
        pointer.classList.remove('hover-effect-for-icons');
      } else {
        cursor.classList.remove('hover-effect');
        pointer.classList.remove('hover-effect');
      }
    });
  };

  for (var i = 0; i < dataMouseElements.length; i++) {
    _loop(i);
  }
}

function isTouchAvailable() {
  return 'ontouchstart' in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
}