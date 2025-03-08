document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".project-card");

  cards.forEach((card) => {
    const icon = card.querySelector(".icon"); // Clickable area
    const dropdownIcon = card.querySelector(".icon svg"); // Chevron icon
    const fullDesc = card.querySelector(".full-desc");
    const shortDesc = card.querySelector(".short-desc");

    // Ensure the required elements exist before adding event listeners
    if (!icon || !dropdownIcon || !fullDesc || !shortDesc) {
      console.warn("Missing elements in project card:", card);
      return;
    }

    icon.addEventListener("click", (event) => {
      event.stopPropagation(); // Prevents closing when clicking inside
      card.classList.toggle("expanded");
      dropdownIcon.classList.toggle("rotated"); // Toggle icon rotation

      // if (card.classList.contains("expanded")) {
      //   shortDesc.style.display = "none";
      // } else {
      //   shortDesc.style.display = "block";
      // }
    });

    document.addEventListener("click", (event) => {
      if (!card.contains(event.target)) {
        card.classList.remove("expanded");
        dropdownIcon.classList.remove("rotated"); // Reset icon rotation
        shortDesc.style.display = "block";
      }
    });
  });
});
