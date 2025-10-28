let countdown;
const startBtn = document.getElementById("startBtn");
const timeLeftEl = document.getElementById("timeLeft");
const eventNameEl = document.getElementById("eventName");

startBtn.addEventListener("click", () => {
  clearInterval(countdown);

  const eventTitle = document.getElementById("eventTitle").value;
  const inputDate = document.getElementById("datetimeInput").value;

  if (!inputDate) {
    alert("Please select a valid date and time!");
    return;
  }

  eventNameEl.textContent = eventTitle ? eventTitle : "Countdown Event";

  const targetTime = new Date(inputDate).getTime();

  countdown = setInterval(() => {
    const now = new Date().getTime();
    const distance = targetTime - now;

    if (distance <= 0) {
      clearInterval(countdown);
      timeLeftEl.textContent = "🎉 Time’s up!";
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    timeLeftEl.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
  }, 1000);
});
