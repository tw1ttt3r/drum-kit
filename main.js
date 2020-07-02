const keys = Array.from(document.querySelectorAll('.key'));
const audios = Array.from(document.querySelectorAll('audio'));

function getElement(key) {
    return { 
        audio: audios.filter(item => item.dataset.key == key)[0],
        key: keys.filter(item => item.dataset.key == key)[0]
    };
}

function addClass() {
    const elements = getElement(this.dataset.key);
    playSound(elements.audio, elements.key);
    this.classList.add('playing');
}

function removeClass() {
    this.classList.remove('playing');
}

function playSound(audio, key) {
    audio.currentTime=0;
    audio.play();
    key.classList.add('playing');
}

document.addEventListener('keydown', (e) => {
    const elements = getElement(e.keyCode);
    playSound(elements.audio, elements.key);
    if (!elements.audio) return;
    playSound(elements.audio, elements.key);
});

function addEvents() {
    keys.forEach( key => {
        key.addEventListener('click', addClass)
        key.addEventListener('transitionend', removeClass)
    });
}

addEvents();