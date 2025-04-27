const images = document.querySelectorAll("img");
const dropzones = document.querySelectorAll(".dropzone");
const checkBtn = document.getElementById("checkBtn");
const resetBtn = document.getElementById("resetBtn");
const resultMessage = document.getElementById("result-message");

// Drag and Drop functions
images.forEach(img => {
  img.addEventListener("dragstart", (e) => {
    e.dataTransfer.setData("text/plain", e.target.id);
  });
});

dropzones.forEach(zone => {
  zone.addEventListener("dragover", (e) => {
    e.preventDefault();
    zone.style.backgroundColor = "#d0e3ff";
  });

  zone.addEventListener("dragleave", () => {
    zone.style.backgroundColor = "#e8f0fe";
  });

  zone.addEventListener("drop", (e) => {
    e.preventDefault();
    const draggedId = e.dataTransfer.getData("text/plain");
    const draggedElement = document.getElementById(draggedId);
    zone.innerHTML = "";
    zone.appendChild(draggedElement);
    zone.style.backgroundColor = "#c2d9ff";
  });
});

// Check Answers
checkBtn.addEventListener("click", () => {
  let correct = true;
  dropzones.forEach(zone => {
    const img = zone.querySelector("img");
    if (!img || img.id !== zone.dataset.correct) {
      correct = false;
    }
  });

  if (correct) {
    resultMessage.textContent = "🎉 Correct! You survived the group project!";
    resultMessage.style.color = "green";
  } else {
    resultMessage.textContent = "❌ Oops! Some matches are wrong. Try again!";
    resultMessage.style.color = "red";
  }
});

// Reset Game
resetBtn.addEventListener("click", () => {
  resultMessage.textContent = "";
  const characterContainer = document.querySelector(".characters");
  images.forEach(img => {
    characterContainer.appendChild(img);
  });
  dropzones.forEach(zone => {
    zone.innerHTML = zone.dataset.correct
      .replace("ghost", "Ghost Member")
      .replace("control", "Control Freak")
      .replace("doer", "The One Who Does Everything");
    zone.style.backgroundColor = "#e8f0fe";
  });
});
