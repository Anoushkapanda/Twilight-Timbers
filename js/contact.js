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
