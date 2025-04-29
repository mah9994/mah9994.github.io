// ===== Clear old game state on fresh manual page load =====
if (window.location.pathname.includes("video.html") && !localStorage.getItem('comingBack')) {
  localStorage.removeItem('gameCompleted');
  localStorage.removeItem('resumeTime');
}

// ===== Detect Which Page =====
const page = document.body.getAttribute('data-page') || window.location.pathname.split("/").pop();

// ===== VIDEO PAGE LOGIC =====
if (page.includes("video")) {
  const video = document.getElementById('project-video');
  const quizBtn = document.getElementById('quiz-button');
  const scoreBtn = document.getElementById('score-button');
  const speedBtn = document.getElementById('speedButton');

  const resume = localStorage.getItem('resumeTime');
  const comingBack = localStorage.getItem('comingBack') === 'true';

  video.addEventListener('loadedmetadata', () => {
    if (resume && comingBack) {
      console.log("Resuming from:", resume);
      video.currentTime = parseFloat(resume);
      setTimeout(() => {
        video.play();
      }, 200);
      localStorage.removeItem('resumeTime');
      localStorage.removeItem('comingBack');
    }
  });

  // Speed toggle
  const speeds = [1, 1.5, 2];
  let idx = 0;
  speedBtn.addEventListener('click', () => {
    idx = (idx + 1) % speeds.length;
    video.playbackRate = speeds[idx];
    speedBtn.textContent = `Speed: ${speeds[idx]}x`;
  });

  // Pause at 1:48
  const TARGET_TIME = 108; // 1 min 48 sec
  video.addEventListener('timeupdate', () => {
    const completed = localStorage.getItem('gameCompleted') === 'true';
    const shown = quizBtn.dataset.shown === 'yes';

    if (!completed && !shown && video.currentTime >= TARGET_TIME) {
      video.pause();
      quizBtn.style.display = 'block';
      quizBtn.dataset.shown = 'yes';
    }
  });

  // Go to game page
  quizBtn.addEventListener('click', () => {
    localStorage.setItem('resumeTime', video.currentTime);
    localStorage.setItem('comingBack', 'true');
    window.location.href = "game.html";
  });

  // When video ends, show score button
  video.addEventListener('ended', () => {
    scoreBtn.style.display = 'block';
  });

  // Go to score page
  scoreBtn.addEventListener('click', () => {
    window.location.href = "score.html";
  });
}

// ===== GAME PAGE LOGIC =====
else if (page.includes("game")) {
  const characterBoxes = document.querySelectorAll(".character-box");
  const dropzones = document.querySelectorAll(".dropzone");
  const checkBtn = document.getElementById("checkBtn");
  const resetBtn = document.getElementById("resetBtn");
  const resultMessage = document.getElementById("result-message");

  const originalTexts = {
    ghost: "Ghost Member",
    control: "Control Freak",
    doer: "The One Who Does Everything"
  };

  // Drag start
  characterBoxes.forEach(box => {
    const img = box.querySelector("img");
    img.addEventListener("dragstart", (e) => {
      e.dataTransfer.setData("text/plain", img.id);
    });
  });

  // Drag over/leave/drop
  dropzones.forEach(zone => {
    zone.addEventListener('dragover', (e) => {
      e.preventDefault();
      zone.style.backgroundColor = "#ffe0d1";
    });

    zone.addEventListener('dragleave', () => {
      zone.style.backgroundColor = "#fff2ec";
    });

    zone.addEventListener('drop', (e) => {
      e.preventDefault();
      const draggedId = e.dataTransfer.getData("text/plain");
      const draggedImg = document.getElementById(draggedId);

      zone.innerHTML = "";
      zone.appendChild(draggedImg);
      zone.style.backgroundColor = "#ffd5c2";
    });
  });

  // Check answers
  checkBtn.addEventListener('click', () => {
    let correct = true;
    dropzones.forEach(zone => {
      const img = zone.querySelector("img");
      if (!img || img.id !== zone.dataset.correct) {
        correct = false;
      }
    });

    if (correct) {
      resultMessage.textContent = "🎉 Correct!";
      resultMessage.style.color = "green";
      resultMessage.style.animation = "pop 0.5s";

      localStorage.setItem('gameCompleted', 'true');
      localStorage.setItem('comingBack', 'true');

      setTimeout(() => {
        window.location.href = 'video.html';
      }, 1500);
    } else {
      resultMessage.textContent = "❌ Oops! Some matches are wrong. Try again!";
      resultMessage.style.color = "red";
      resultMessage.style.animation = "none";
    }
  });

  // Reset game
  resetBtn.addEventListener('click', () => {
    resultMessage.textContent = "";
    resultMessage.style.animation = "none";

    const characterContainer = document.querySelector(".left-column");
    characterContainer.innerHTML = ""; // Clear left column

    const characters = [
      { id: "ghost", img: "ghost.png", name: "Fatima" },
      { id: "control", img: "control.png", name: "Asini" },
      { id: "doer", img: "doer.png", name: "Mariam" }
    ];

    characters.forEach(character => {
      const box = document.createElement('div');
      box.classList.add('character-box');

      const img = document.createElement('img');
      img.src = character.img;
      img.id = character.id;
      img.alt = character.name;
      img.draggable = true;

      const caption = document.createElement('p');
      caption.textContent = character.name;

      box.appendChild(img);
      box.appendChild(caption);
      characterContainer.appendChild(box);

      // Reattach drag start
      img.addEventListener('dragstart', (e) => {
        e.dataTransfer.setData("text/plain", img.id);
      });
    });

    // Reset dropzones
    dropzones.forEach(zone => {
      const roleKey = zone.dataset.correct;
      zone.textContent = originalTexts[roleKey];
      zone.style.backgroundColor = "#fff2ec";
    });
  });
}

// ===== SCORE PAGE LOGIC =====
else if (page.includes("score")) {
  const submitButton = document.getElementById('submit-scores-button');
  const allInputs = document.querySelectorAll('.score-input');

  if (submitButton) {
    submitButton.addEventListener('click', () => {
      allInputs.forEach(input => {
        const scoreDisplay = document.createElement('div');
        scoreDisplay.textContent = `Actual Score: 97`; // Always 97
        scoreDisplay.classList.add('score-display');
        input.parentElement.appendChild(scoreDisplay);
        input.disabled = true;
      });

      submitButton.disabled = true;

      // Show Reality of Group Projects text
      const reality = document.createElement('div');
      reality.textContent = "Reality of Group Projects";
      reality.style.marginTop = "20px";
      reality.style.fontWeight = "bold";
      reality.style.fontSize = "20px";
      reality.style.color = "#FF8C00";
      submitButton.parentElement.appendChild(reality);
    });
  }
}
