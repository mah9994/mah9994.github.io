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
    if (tip.classList.contains('active')) {
      // Shrink back to star shape
      tip.classList.remove('active');
      tip.style.clipPath = "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)";
      tip.style.width = "80px";
      tip.style.height = "80px";
    } else {
      // Expand and remove star shape
      tip.classList.add('active');
      tip.style.clipPath = "none";
      tip.style.width = "80vw";
      tip.style.height = "80vh";
    }
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



// for background yellow stars
document.addEventListener("DOMContentLoaded", function () {
  // Function to generate random stars
  // Function to generate random stars
  function createStar() {
    const star = document.createElement("div");
    star.classList.add("star");

    // Randomize size, position, and animation timing
    const size = Math.random() * 20 + 5; // Increase size between 5px and 25px
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    star.style.top = `${Math.random() * window.innerHeight}px`; // Random vertical position
    star.style.left = `${Math.random() * window.innerWidth}px`; // Random horizontal position
    star.style.animationDuration = `${Math.random() * 1.5 + 1}s`; // Random animation duration between 1s and 2.5s

    // Append the star to the body
    document.body.appendChild(star);

    // Remove the star after animation ends (so they don't stay forever)
    setTimeout(() => {
      star.remove();
    }, 2000);
  }


  // Create stars every 100ms
  setInterval(createStar, 100);
});
