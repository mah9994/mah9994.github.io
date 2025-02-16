document.addEventListener("DOMContentLoaded", function () {
  // Select all alumni cards
  const alumniCards = document.querySelectorAll(".alumni-card");

  // Add click event to each card
  alumniCards.forEach((card) => {
    card.addEventListener("click", function () {
      // Toggle the 'flipped' class on the alumni card itself
      card.classList.toggle("flipped");
    });
  });
});
