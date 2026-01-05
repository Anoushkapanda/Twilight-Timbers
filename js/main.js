// navbar height reducing during scrolling

const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 60) {
    header.classList.add("header--shrink");
  } else {
    header.classList.remove("header--shrink");
  }
});


const countdownDate = new Date("December 15, 2024 19:00:00").getTime();

const labelElement = document.querySelector(".event-label");
const timerElement = document.querySelector(".event-timer");

function updateTimer() {
  const now = new Date().getTime();
  const distance = countdownDate - now;

  if (distance > 0) {
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    
    labelElement.textContent = "Next Curated Experience";
    timerElement.textContent = `Begins in ${days} days ${hours} hrs ${minutes} mins`;
  } 
  else {
    clearInterval(timeInterval);

    labelElement.textContent = "Thank you for joining us";
    timerElement.textContent = "Explore upcoming experiences soon";
  }
}

const timeInterval = setInterval(updateTimer, 1000);
updateTimer();

const liveWindow = 3 * 60 * 60 * 1000; // 3 hours

if (distance <= 0 && Math.abs(distance) <= liveWindow) {
  labelElement.textContent = "Happening Tonight at Twilight Timbers";
  timerElement.textContent = "Join us for an unforgettable evening";
}
