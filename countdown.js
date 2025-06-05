const titleInput = document.getElementById('title');
const dateInput = document.getElementById('date');
const subjectDisplay = document.getElementById('subject');
const countdownDisplay = document.getElementById('countdown');
const startButton = document.getElementById('start');
let countdownInterval;

startButton.addEventListener('click', () => {
  const title = titleInput.value.trim() || 'Event';
  const targetDate = new Date(dateInput.value);
  if (isNaN(targetDate)) {
    alert('Please enter a valid date and time.');
    return;
  }
  subjectDisplay.textContent = title;
  clearInterval(countdownInterval);
  updateCountdown(targetDate);
  countdownInterval = setInterval(() => updateCountdown(targetDate), 1000);
});

function updateCountdown(targetDate) {
  const now = new Date();
  const diff = targetDate - now;
  if (diff <= 0) {
    clearInterval(countdownInterval);
    countdownDisplay.textContent = 'Time is up!';
    return;
  }
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);
  countdownDisplay.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}
