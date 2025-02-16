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
    // Toggle the active class to expand/collapse the tip
    tip.classList.toggle('active');
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



// for background yellow stars effect
document.addEventListener("DOMContentLoaded", function () {
  // Function to generate random stars
  function createStar() {
    const star = document.createElement("div");
    star.classList.add("star");

    // Randomize size, position, and animation timing
    const size = Math.random() * 20 + 5; // Random size between 5px and 25px
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;

    // Get random position based on document height and width
    const maxHeight = document.documentElement.scrollHeight;
    const maxWidth = document.documentElement.scrollWidth;

    star.style.top = `${Math.random() * maxHeight}px`; // Random vertical position based on the document height
    star.style.left = `${Math.random() * maxWidth}px`; // Random horizontal position based on the document width

    star.style.animationDuration = `${Math.random() * 1.5 + 1}s`; // Random animation duration between 1s and 2.5s

    // Append the star to the body
    document.body.appendChild(star);

    // Remove the star after animation ends
    setTimeout(() => {
      star.remove();
    }, 2000);
  }

  // Create stars every 100ms
  setInterval(createStar, 100);
});

