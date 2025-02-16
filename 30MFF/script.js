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

// Add event listeners for tips
const tips = document.querySelectorAll('.tip');

tips.forEach(tip => {
  tip.addEventListener('click', () => {
    // Toggle the description visibility
    const description = tip.querySelector('.tipDescription');
    description.style.display = description.style.display === 'block' ? 'none' : 'block';
  });
});

// Handle form submission for user-generated tips
document.getElementById('submitButton').addEventListener('click', () => {
  const userTip = document.getElementById('userTip').value;
  if (userTip) {
    alert('Thank you for submitting your tip!');
    document.getElementById('userTip').value = '';  // Clear the text area after submission
  } else {
    alert('Please enter a tip before submitting.');
  }
});


