document.addEventListener("DOMContentLoaded", () => {
    const filters = document.querySelectorAll(".gallery-filter-item");
    const items = document.querySelectorAll(".gallery-item");
  
    filters.forEach(filter => {
      filter.addEventListener("click", () => {
        filters.forEach(f => f.classList.remove("active"));
        filter.classList.add("active");
  
        const selected = filter.dataset.filter;
  
        items.forEach(item => {
          const category = item.dataset.category;
  
          // fade out
          item.classList.add("fade-out");
  
          setTimeout(() => {
            if (selected === "all" || category === selected) {
              item.style.display = "block";
              requestAnimationFrame(() => {
                item.classList.remove("fade-out");
              });
            } else {
              item.style.display = "none";
            }
          }, 250);
        });
      });
    });
  });
  