function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const startBtnRef = document.querySelector('button[data-start]');
const stopBtnRef = document.querySelector('button[data-stop]');

let colorChangeIntervalId = null;
const INTERVAL_DELAY = 1000;

startBtnRef.addEventListener('click', onStartBtnClick);
stopBtnRef.addEventListener('click', onStopBtnClick);

function onStartBtnClick(evt) {
  document.body.style.backgroundColor = getRandomHexColor();
  colorChangeIntervalId = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, INTERVAL_DELAY);

  startBtnRef.disabled = true;
}

function onStopBtnClick() {
  clearInterval(colorChangeIntervalId);
  startBtnRef.disabled = false;
}
