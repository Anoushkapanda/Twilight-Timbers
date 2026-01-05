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
document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
        const isActive = question.classList.contains('active');

        // Close all open answers
        document.querySelectorAll('.faq-question').forEach(q => q.classList.remove('active'));
        document.querySelectorAll('.faq-answer').forEach(a => {
            a.style.maxHeight = null;
        });

        if (!isActive) {
            // Open the clicked answer
            question.classList.add('active');
            const answer = question.nextElementSibling;
            answer.style.maxHeight = answer.scrollHeight + "px";
        }
    });
});

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


