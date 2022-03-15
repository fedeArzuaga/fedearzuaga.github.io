const writtenElement = document.querySelector("#dynamic-text"),
      words = writtenElement.dataset.words.split(',');

function writeText ( arrayWords, element, duration ) {
    
    const arrLength = arrayWords.length;
    const counter = 0;

    for ( let i = 0; i < arrLength; i++ ) {
        
        const arrayWord = arrayWords[counter];

        for ( let j = 0; j < arrayWord.length; j++ ) {
            setInterval()
        }

    }

}

writeText(words, writtenElement, 500);