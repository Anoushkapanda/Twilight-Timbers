// ===================== MENU FILTERING WITH SOFT FADE =====================

const filterTabs = document.querySelectorAll(".menu-filter-item");
const menuItems = document.querySelectorAll(".menu-item");

filterTabs.forEach(tab => {
  tab.addEventListener("click", () => {
    const selectedCategory = tab.getAttribute("data-filter");

    // update active tab
    filterTabs.forEach(t => t.classList.remove("active"));
    tab.classList.add("active");

    // filter items
    menuItems.forEach(item => {
      const itemCategory = item.getAttribute("data-category");

      if (selectedCategory === "all" || itemCategory === selectedCategory) {
        item.classList.remove("hidden");
      } else {
        item.classList.add("hidden");
      }
    });
  });
});
