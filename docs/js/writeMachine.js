"use strict";

var writtenElement = document.querySelector("#dynamic-text"),
    words = writtenElement.dataset.words.split(',');

function writeText(arrayWords, element, duration) {
  var arrLength = arrayWords.length;
  var counter = 0;

  for (var i = 0; i < arrLength; i++) {
    var arrayWord = arrayWords[counter];

    for (var j = 0; j < arrayWord.length; j++) {
      setInterval();
    }
  }
}

writeText(words, writtenElement, 500);