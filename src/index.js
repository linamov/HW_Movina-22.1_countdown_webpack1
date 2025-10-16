import './styles.scss';

let totalSeconds = 85;

const formatTime = (seconds) => {
  const mins = String(Math.floor(seconds / 60)).padStart(2, '0');
  const secs = String(seconds % 60).padStart(2, '0');
  return `${mins}:${secs}`;
};

const timerDisplay = document.getElementById('timer');

const countdown = (seconds) => {
  return new Promise((resolve) => {
    let remaining = seconds;
    timerDisplay.textContent = formatTime(remaining);

    const interval = setInterval(() => {
      remaining--;
      timerDisplay.textContent = formatTime(remaining);

      if (remaining <= 0) {
        clearInterval(interval);
        resolve("Time is up!");
      }
    }, 1000);
  });
};

countdown(totalSeconds).then(msg => alert(msg));
