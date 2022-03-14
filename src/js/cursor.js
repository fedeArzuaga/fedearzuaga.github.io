const cursor = document.querySelector("#cursor"),
      pointer = document.querySelector("#pointer"),
      dataMouseElements = Array.from(document.querySelectorAll('[data-mouse="hover"], a'));

document.addEventListener( 'mousemove', e => {
    cursor.classList.add('on-screen');
    pointer.classList.add('on-screen');

    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;
    pointer.style.left = `${e.clientX}px`;
    pointer.style.top = `${e.clientY}px`;
});

document.addEventListener( 'mouseout', () => {
    cursor.classList.remove('on-screen');
    pointer.classList.remove('on-screen');
});

for ( let i = 0; i < dataMouseElements.length; i++ ) {
    dataMouseElements[i].addEventListener( 'mousemove', e => {
        cursor.classList.add('hover-effect');
        pointer.classList.add('hover-effect');
    });
    dataMouseElements[i].addEventListener( 'mouseout', e => {
        cursor.classList.remove('hover-effect');
        pointer.classList.remove('hover-effect');
    })
}

