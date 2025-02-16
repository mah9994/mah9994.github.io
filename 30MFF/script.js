document.addEventListener("DOMContentLoaded", function () {
  // Select all alumni cards
  const alumniCards = document.querySelectorAll(".alumni-card");

  // Add click event to each card
  alumniCards.forEach((card) => {
    card.addEventListener("click", function () {
      let cardInner = card.querySelector(".card-inner");

      // Toggle the 'flipped' class to rotate the card
      cardInner.classList.toggle("flipped");
    });
  });
});
