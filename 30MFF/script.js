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


document.addEventListener("DOMContentLoaded", function () {
  // Select all stars
  const stars = document.querySelectorAll('.tip-star');

  stars.forEach(star => {
    star.addEventListener('click', function (event) {
      // Remove existing description box if any
      const existingBox = document.querySelector('.description-box');
      if (existingBox) {
        existingBox.remove();
      }

      // Create description box
      const descriptionBox = document.createElement('div');
      descriptionBox.classList.add('description-box');
      descriptionBox.textContent = star.getAttribute('data-text');

      // Position the description box near the clicked star
      const rect = star.getBoundingClientRect();
      descriptionBox.style.position = 'absolute';
      descriptionBox.style.left = `${rect.left + window.scrollX + 30}px`; // Adjust position
      descriptionBox.style.top = `${rect.top + window.scrollY}px`;
      descriptionBox.style.padding = '10px';
      descriptionBox.style.background = 'gold';
      descriptionBox.style.border = '2px solid black';
      descriptionBox.style.borderRadius = '10px';
      descriptionBox.style.boxShadow = '2px 2px 10px rgba(0,0,0,0.2)';
      descriptionBox.style.cursor = 'pointer';
      
      // Append to body
      document.body.appendChild(descriptionBox);

      // Remove box on click
      descriptionBox.addEventListener('click', function () {
        descriptionBox.remove();
      });
    });
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
