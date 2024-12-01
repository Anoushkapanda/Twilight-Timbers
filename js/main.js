//converts date to timestamp in milliseconds (since jan 1, 1970)
const countdownDate = new Date("December 15, 2024 19:00:00").getTime()

function updateTimer() {

    const now = new Date().getTime()

    // remaining time ( +ve => time left till event || -ve => event ended )
    const distance = countdownDate - now

    // remaining time calc
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // update timer Display

    const timerElement = document.getElementsByClassName("home-upcoming-events-timer")[0];
    
    if (distance >= 0) {
        timerElement.textContent = `${days} Days ${hours}:${minutes}:${seconds}`;
    } else {
        clearInterval(timeInterval);
        timerElement.textContent = "Event Started!!";
    }
}


// to keep countdown updated -> call updateTimer every 1000 ms

const timeInterval = setInterval(updateTimer, 1000)
