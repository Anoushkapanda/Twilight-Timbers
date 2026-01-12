// Event Testimonials Auto Fade
const testimonials = document.querySelectorAll(".event-testimonial");
let currentTestimonial = 0;

setInterval(() => {
  testimonials[currentTestimonial].classList.remove("active");
  currentTestimonial = (currentTestimonial + 1) % testimonials.length;
  testimonials[currentTestimonial].classList.add("active");
}, 4500);

//cta modal
const openEventModal = document.getElementById("open-event-modal");
const eventModal = document.getElementById("event-modal");
const closeEventModal = document.querySelector(".event-modal-close");

openEventModal.addEventListener("click", () => {
  eventModal.style.display = "flex";
});

closeEventModal.addEventListener("click", () => {
  eventModal.style.display = "none";
});

eventModal.addEventListener("click", (e) => {
  if (e.target === eventModal) {
    eventModal.style.display = "none";
  }
});
