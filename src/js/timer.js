const dateSelector = document.getElementById("date-selector");
const startBtn = document.querySelector('.start-btn');
const daysSpan = document.querySelector("span[data-value='days']");
const hoursSpan = document.querySelector("span[data-value='hours']");
const minsSpan = document.querySelector("span[data-value='mins']");
const secsSpan = document.querySelector("span[data-value='secs']");


startBtn.addEventListener('click', onClickInterval);
let timerId = null;

function onClickInterval() {
  timerId = setInterval(() => {
    onClickStart()
  }, 1000);  
};

function onClickStart() {
  const userDate = new Date(dateSelector.value);
  const currentDate = new Date();
  const deltaTime = userDate.getTime() - currentDate.getTime();

  if (deltaTime < 1000) {
    clearInterval(timerId)
    const Swal = require('sweetalert2')
    Swal.fire({
      text: "Please choose a date in the future",
      icon: 'error',
      confirmButtonText: 'Ok boomer'
    });

  } else {
    convertMs(deltaTime)
  };
};

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

    
  const days = pad(Math.floor(ms / day));
  const hours = pad(Math.floor((ms % day) / hour));    
  const minutes = pad(Math.floor(((ms % day) % hour) / minute));    
  const seconds = pad(Math.floor((((ms % day) % hour) % minute) / second));

  daysSpan.textContent = `${days}`;
  hoursSpan.textContent = `${hours}`;
  minsSpan.textContent = `${minutes}`;
  secsSpan.textContent = `${seconds}`;
};

function pad(value) {
  return String(value).padStart(2, "0");
};



