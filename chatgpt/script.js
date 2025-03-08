document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".project-card");

  cards.forEach((card) => {
    const toggleBtn = card.querySelector(".toggle-btn");
    const fullDesc = card.querySelector(".full-desc");
    const shortDesc = card.querySelector(".short-desc");

    toggleBtn.addEventListener("click", (event) => {
      event.stopPropagation(); // Prevent immediate collapse
      card.classList.toggle("expanded");

      if (card.classList.contains("expanded")) {
        shortDesc.style.display = "none";
        toggleBtn.textContent = "Read Less";
      } else {
        shortDesc.style.display = "block";
        toggleBtn.textContent = "Read More";
      }
    });

    document.addEventListener("click", (event) => {
      if (!card.contains(event.target)) {
        card.classList.remove("expanded");
        shortDesc.style.display = "block";
        toggleBtn.textContent = "Read More";
      }
    });
  });
});
