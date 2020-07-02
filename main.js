const keys = Array.from(document.querySelectorAll('.key'));

function addEvents() {
    keys.forEach( key => {
        key.addEventListener('click', () => {
            key.classList.add('playing');
        })
        key.addEventListener('transitionend', () => {
            key.classList.remove('playing');
        })
    });
}

addEvents();