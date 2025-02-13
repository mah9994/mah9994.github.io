function flipCard(clickedCard) {
    // Close all other flipped cards
    document.querySelectorAll('.card-inner').forEach(card => {
      if (card !== clickedCard.querySelector('.card-inner')) {
        card.classList.remove('flipped');
      }
    });
  
    // Toggle the clicked card
    clickedCard.querySelector('.card-inner').classList.toggle('flipped');
  }

document.addEventListener("click", function (event) {
  const allCards = document.querySelectorAll('.card-inner');
  
  allCards.forEach(card => {
    if (!card.closest('.alumni-card').contains(event.target)) {
      card.classList.remove('flipped');
    }
  });
});

function flipCard(clickedCard) {
  // Close all other flipped cards
  document.querySelectorAll('.card-inner').forEach(card => {
    if (card !== clickedCard.querySelector('.card-inner')) {
      card.classList.remove('flipped');
    }
  });

  // Toggle the clicked card
  let innerCard = clickedCard.querySelector('.card-inner');
  innerCard.classList.toggle('flipped');

  // Auto close after 5 seconds
  setTimeout(() => {
    innerCard.classList.remove('flipped');
  }, 5000);
}

document.querySelectorAll('.alumni-card').forEach(card => {
  card.addEventListener('keydown', function (event) {
    if (event.key === "Enter" || event.key === " ") {
      flipCard(card);
    }
  });
});
