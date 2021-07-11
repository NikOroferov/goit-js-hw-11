const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
const bodyEl = document.querySelector('body');

startBtn.addEventListener('click', onClickStart);
stopBtn.addEventListener('click', onClickStop);

let interval = null;

function onClickStart() {
    interval = setInterval(() => {
        bodyEl.style.background = getRandomHexColor()
    }, 1000);
    startBtn.setAttribute('disabled', true)
    
};

function onClickStop() {
    clearInterval(interval);
    startBtn.removeAttribute('disabled');
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}