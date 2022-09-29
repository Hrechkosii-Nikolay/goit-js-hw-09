import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const refs = {
  input: document.getElementById('datetime-picker'),
  btn: document.querySelector('button[data-start]'),

  days: document.querySelector('[data-days]'),
  hours: document.querySelector('[data-hours]'),
  minutes: document.querySelector('[data-minutes]'),
  seconds: document.querySelector('[data-seconds]'),
};
let intervalId = null;
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] < options.defaultDate) {
      refs.btn.setAttribute('disabled', false);
      alert('Please choose a date in the future');
    } else if (selectedDates[0] > options.defaultDate) {
      refs.btn.removeAttribute('disabled');
      refs.btn.addEventListener('click', onStartBtnClick);
      options.selectDate = selectedDates[0];
    }
    clearInterval(intervalId);
    refs.days.textContent = '00';
    refs.hours.textContent = '00';
    refs.minutes.textContent = '00';
    refs.seconds.textContent = '00';
  },
};

flatpickr('#datetime-picker', options);

function onStartBtnClick() {
  const selectDate = options.selectDate.getTime();

  intervalId = setInterval(() => {
    const timer = selectDate - Date.now();
    const { days, hours, minutes, seconds } = convertMs(timer);
    refs.days.textContent = days;
    refs.hours.textContent = hours;
    refs.minutes.textContent = minutes;
    refs.seconds.textContent = seconds;
  }, 1000);
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = pad(Math.floor(ms / day));
  const hours = pad(Math.floor((ms % day) / hour));
  const minutes = pad(Math.floor(((ms % day) % hour) / minute));
  const seconds = pad(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}

function pad(value) {
  return String(value).padStart(2, '0');
}
