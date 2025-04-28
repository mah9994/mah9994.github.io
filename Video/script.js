// ===== DRAG AND DROP GAME LOGIC =====

const characterBoxes = document.querySelectorAll(".character-box");
const dropzones = document.querySelectorAll(".dropzone");
const checkBtn = document.getElementById("checkBtn");
const resetBtn = document.getElementById("resetBtn");
const resultMessage = document.getElementById("result-message");

// Save original texts for dropzones
const originalTexts = {
  ghost: "Ghost Member",
  control: "Control Freak",
  doer: "The One Who Does Everything"
};

// Drag start
characterBoxes.forEach(box => {
  const img = box.querySelector("img");
  img.addEventListener("dragstart", (e) => {
    e.dataTransfer.setData("text/plain", box.id);
  });

  // Give each character box an id same as image id
  box.id = img.id + "-box"; // Example: ghost-box
});

// Drag over, leave, drop
dropzones.forEach(zone => {
  zone.addEventListener("dragover", (e) => {
    e.preventDefault();
    zone.style.backgroundColor = "#ffe0d1"; // pastel hover
  });

  zone.addEventListener("dragleave", () => {
    zone.style.backgroundColor = "#fff2ec"; // pastel default
  });

  zone.addEventListener("drop", (e) => {
    e.preventDefault();
    const boxId = e.dataTransfer.getData("text/plain");
    const boxElement = document.getElementById(boxId);

    zone.innerHTML = ""; // clear previous stuff
    zone.appendChild(boxElement);
    zone.style.backgroundColor = "#ffd5c2"; // pastel drop color
  });
});

// Check Answers
checkBtn.addEventListener("click", () => {
  let correct = true;
  dropzones.forEach(zone => {
    const box = zone.querySelector(".character-box");
    if (!box) {
      correct = false;
      return;
    }
    const img = box.querySelector("img");
    if (!img || img.id !== zone.dataset.correct) {
      correct = false;
    }
  });

  if (correct) {
    resultMessage.textContent = "🎉 Correct! You survived the group project!";
    resultMessage.style.color = "green";
    resultMessage.style.animation = "pop 0.5s"; // (optional pop animation)
  } else {
    resultMessage.textContent = "❌ Oops! Some matches are wrong. Try again!";
    resultMessage.style.color = "red";
    resultMessage.style.animation = "none";
  }
});

// Reset Game
resetBtn.addEventListener("click", () => {
  resultMessage.textContent = "";
  resultMessage.style.animation = "none";

  // Move character boxes back to the left column
  const characterContainer = document.querySelector(".left-column");
  characterBoxes.forEach(box => {
    characterContainer.appendChild(box);
  });

  // Restore dropzone texts
  dropzones.forEach(zone => {
    const roleKey = zone.dataset.correct;
    zone.textContent = originalTexts[roleKey];
    zone.style.backgroundColor = "#fff2ec";
  });
});


// ===== SCORE SUBMISSION LOGIC =====

function submitScores() {
  const scoreInputs = document.querySelectorAll('.score-input');
  
  scoreInputs.forEach(input => {
    const scoreDisplay = document.createElement('div');
    scoreDisplay.textContent = `Actual Score: 97`; // Always 97
    scoreDisplay.classList.add('score-display');
    input.parentElement.appendChild(scoreDisplay);

    // Disable the input after submission
    input.disabled = true;
  });

  // Disable the submit button after clicking
  document.getElementById('submit-scores-button').disabled = true;

  // Show the popup text after submission
  const popup = document.getElementById('popup-text');
  popup.style.display = "block";
  popup.style.animation = "fadeIn 1s forwards"; // smooth fade in
}
