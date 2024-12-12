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


// Toggle FAQ button
function toggleAnswer(button) {
    const answer = button.nextElementSibling;
    const arrow = button.querySelector('.arrow');

    // Check if the answer is already visible
    if (answer.style.height && answer.style.height !== "0px") {
        // If it is visible, collapse it
        answer.style.height = "0px";
        arrow.style.transform = "rotate(0deg)";
    } else {
        // If it isn't visible, expand it
        answer.style.height = `${answer.scrollHeight}px`;  // Use scrollHeight for the full height of the content
        arrow.style.transform = "rotate(180deg)";
    }
}

// Search bar for FAQ
function filterFAQs() {
    const searchQuery = document.getElementById('faq-search-input').value.toLowerCase();  // Get the input value
    const faqItems = document.querySelectorAll('.faq-item'); // Select all FAQ items

    let matchedFAQ = null;

    // Loop through all FAQ items and check for a match
    faqItems.forEach(function(faqItem) {
        const questionText = faqItem.querySelector('.faq-question span').textContent.toLowerCase();
        if (questionText.includes(searchQuery)) {
            matchedFAQ = faqItem;
            return false; // Stop the loop once a match is found
        }
    });

    // Scroll to the matched FAQ if found
    if (matchedFAQ) {
        matchedFAQ.scrollIntoView({behavior: 'smooth', block: 'center'});
    }
}


