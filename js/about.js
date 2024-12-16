const slides = document.querySelectorAll('.testimonial-slide');
const carousel = document.querySelector('.testimonial-carousel');
let currentIndex = 0;

function updateSlidePosition() {
    const offset = -currentIndex * 100;
    carousel.style.transform = `translateX(${offset}%)`;
}

function showNextSlide() {
    currentIndex = (currentIndex + 1) % slides.length; // Cycle to the first slide
    updateSlidePosition();
}

function showPrevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length; // Cycle to the last slide
    updateSlidePosition();
}

document.getElementById('next-slide').addEventListener('click', showNextSlide);
document.getElementById('prev-slide').addEventListener('click', showPrevSlide);

// Auto-scroll every 5 seconds
setInterval(showNextSlide, 10000);







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


