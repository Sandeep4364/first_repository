
console.log("AJIO Clone loaded");

// Add hover effect and submenu display to header navigation items
document.addEventListener("DOMContentLoaded", function () {
  const navItems = document.querySelectorAll("header nav ul li");

  navItems.forEach((item) => {
    const submenu = item.querySelector(".submenu");

    item.addEventListener("mouseenter", function () {
      item.style.backgroundColor = "#f2f2f2";
      item.style.cursor = "pointer";
      if (submenu) {
        submenu.style.display = "block";
      }
    });

    item.addEventListener("mouseleave", function () {
      item.style.backgroundColor = "";
      if (submenu) {
        submenu.style.display = "none";
      }
    });
  });
});
