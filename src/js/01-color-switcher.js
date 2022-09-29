function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const refs = {
  body: document.querySelector('body'),
  btnStart: document.querySelector('button[data-start]'),
  btnStop: document.querySelector('button[data-stop]'),
};

refs.btnStop.setAttribute('disabled', true);
refs.btnStart.addEventListener('click', onBtnStartClick);
refs.btnStop.addEventListener('click', onBtnStopClick);

let intervalId = null;

function onBtnStartClick() {
  intervalId = setInterval(() => {
    refs.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
  refs.body.style.backgroundColor = getRandomHexColor();
  refs.btnStop.removeAttribute('disabled');
  refs.btnStart.setAttribute('disabled', true);
}

function onBtnStopClick() {
  refs.btnStart.removeAttribute('disabled');
  refs.btnStop.setAttribute('disabled', true);
  clearInterval(intervalId);
}
