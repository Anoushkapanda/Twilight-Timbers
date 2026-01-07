// ===================== MENU FILTERING =====================

const filterItems = document.querySelectorAll('.menu-filter-item');
const menuItems = document.querySelectorAll('.menu-item');

filterItems.forEach(filter => {
  filter.addEventListener('click', () => {

    filterItems.forEach(item => item.classList.remove('active'));
    filter.classList.add('active');

    const category = filter.dataset.filter;

    // Step 1: fade everything out
    menuItems.forEach(item => {
      item.classList.add('fade-out');
    });

    // Step 2: after fade, hide non-matching items
    setTimeout(() => {
      menuItems.forEach(item => {
        const itemCategory = item.dataset.category;

        if (category === 'all' || itemCategory === category) {
          item.classList.remove('is-hidden');
        } else {
          item.classList.add('is-hidden');
        }
      });
    }, 300);

    // Step 3: fade matching items back in
    setTimeout(() => {
      menuItems.forEach(item => {
        item.classList.remove('fade-out');
      });
    }, 320);
  });
});




// ===================== CHEF SPECIAL MODAL =====================

const openModalBtn = document.getElementById("open-chef-modal");
const modalOverlay = document.getElementById("chef-surprise-modal");
const closeModalBtn = document.querySelector(".chef-modal-close");

openModalBtn.addEventListener("click", () => {
    modalOverlay.classList.add("active");
    modalOverlay.setAttribute("aria-hidden", "false");
});

closeModalBtn.addEventListener("click", () => {
    modalOverlay.classList.remove("active");
    modalOverlay.setAttribute("aria-hidden", "true");
});

// Close when clicking outside modal
modalOverlay.addEventListener("click", (e) => {
    if (e.target === modalOverlay) {
        modalOverlay.classList.remove("active");
        modalOverlay.setAttribute("aria-hidden", "true");
    }
});
