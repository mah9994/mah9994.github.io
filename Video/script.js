/* ---------- reset flags on manual reload of video.html ---------- */
if (window.location.pathname.includes("video.html")
    && !localStorage.getItem("comingBack")) {
  localStorage.removeItem("gameCompleted");
  localStorage.removeItem("resumeTime");
}

/* ---------- quick helper ---------- */
function exitFullscreen() {
  if (document.fullscreenElement)      document.exitFullscreen();
  else if (document.webkitFullscreenElement) document.webkitExitFullscreen();
  else if (document.mozFullScreenElement)    document.mozCancelFullScreen();
}

/* ---------- page detection ---------- */
const page = (document.body.dataset.page ||
              window.location.pathname.split("/").pop()).toLowerCase();

/* ====================================================================== */
/* ===========================  VIDEO PAGE ============================== */
/* ====================================================================== */
if (page.includes("video")) {
  const video    = document.getElementById("project-video");
  const quizBtn  = document.getElementById("quiz-button");
  const scoreBtn = document.getElementById("score-button");
  const speedBtn = document.getElementById("speedButton");

  /* ----------- resume video if returning from game ----------- */
  const resumeTime = localStorage.getItem("resumeTime");
  const comingBack = localStorage.getItem("comingBack") === "true";

  video.addEventListener("loadedmetadata", () => {
    if (resumeTime && comingBack) {
      video.currentTime = parseFloat(resumeTime);
      setTimeout(() => video.play(), 200);
      localStorage.removeItem("resumeTime");
      localStorage.removeItem("comingBack");
    }
  });

  /* ----------- speed toggle ----------- */
  const speeds = [1, 1.5, 2];
  let idx = 0;
  speedBtn.addEventListener("click", () => {
    idx = (idx + 1) % speeds.length;
    video.playbackRate = speeds[idx];
    speedBtn.textContent = `Speed: ${speeds[idx]}x`;
  });

  /* ----------- overlay-pending flag ----------- */
  let pendingOverlay = null;            // "quiz" | "score" | null

  /* ----------- show overlay helpers ----------- */
  function showQuizOverlay() {
    video.pause();
    quizBtn.style.display = "block";
    quizBtn.dataset.shown = "yes";
  }
  function showScoreOverlay() {
    scoreBtn.style.display = "block";
  }

  /* ----------- 1 : 48 logic ----------- */
  const TARGET = 108;   // seconds
  video.addEventListener("timeupdate", () => {
    const completed = localStorage.getItem("gameCompleted") === "true";
    const already   = quizBtn.dataset.shown === "yes";

    if (!completed && !already && video.currentTime >= TARGET) {
      if (document.fullscreenElement) {           // in fullscreen
        pendingOverlay = "quiz";
        exitFullscreen();                         // will show overlay after exit
      } else {
        showQuizOverlay();
      }
    }
  });

  /* ----------- ended logic ----------- */
  video.addEventListener("ended", () => {
    if (document.fullscreenElement) {
      pendingOverlay = "score";
      exitFullscreen();
    } else {
      showScoreOverlay();
    }
  });

  /* ----------- fullscreen change handler ----------- */
  function onFsChange() {
    /* when exiting FS & an overlay is pending, show it */
    if (!document.fullscreenElement && pendingOverlay) {
      if (pendingOverlay === "quiz")  showQuizOverlay();
      if (pendingOverlay === "score") showScoreOverlay();
      pendingOverlay = null;
    }
  }
  document.addEventListener("fullscreenchange", onFsChange);
  document.addEventListener("webkitfullscreenchange", onFsChange);
  document.addEventListener("mozfullscreenchange", onFsChange);

  /* ----------- button clicks ----------- */
  quizBtn.addEventListener("click", () => {
    localStorage.setItem("resumeTime", video.currentTime);
    localStorage.setItem("comingBack", "true");
    window.location.href = "game.html";
  });
  scoreBtn.addEventListener("click", () => {
    localStorage.setItem("resumeTime", video.currentTime);
    window.location.href = "score.html";
  });
}

/* ====================================================================== */
/* ===========================  GAME PAGE  ============================== */
/* ====================================================================== */
else if (page.includes("game")) {
  const characterBoxes = document.querySelectorAll(".character-box");
  const dropzones      = document.querySelectorAll(".dropzone");
  const checkBtn       = document.getElementById("checkBtn");
  const resetBtn       = document.getElementById("resetBtn");
  const resultMsg      = document.getElementById("result-message");

  const originals = {
    ghost   : "Ghost Member",
    control : "Control Freak",
    doer    : "The One Who Does Everything"
  };

  /* drag-start on every image */
  characterBoxes.forEach(box => {
    box.querySelector("img").addEventListener("dragstart", e => {
      e.dataTransfer.setData("text/plain", e.target.id);
    });
  });

  /* drag-over / drop */
  dropzones.forEach(zone => {
    zone.addEventListener("dragover", e => {
      e.preventDefault();
      zone.style.backgroundColor = "#ffe0d1";
    });
    zone.addEventListener("dragleave", () => {
      zone.style.backgroundColor = "#fff2ec";
    });
    zone.addEventListener("drop", e => {
      e.preventDefault();
      const id  = e.dataTransfer.getData("text/plain");
      const img = document.getElementById(id);
      zone.innerHTML = "";
      zone.appendChild(img);
      zone.style.backgroundColor = "#ffd5c2";
    });
  });

  /* check answers */
  checkBtn.addEventListener("click", () => {
    const allCorrect = [...dropzones].every(zone => {
      const img = zone.querySelector("img");
      return img && img.id === zone.dataset.correct;
    });

    if (allCorrect) {
      resultMsg.textContent = "🎉 Correct!";
      resultMsg.style.color = "green";
      resultMsg.style.animation = "pop 0.5s";

      localStorage.setItem("gameCompleted", "true");
      localStorage.setItem("comingBack", "true");

      setTimeout(() => (window.location.href = "video.html"), 1500);
    } else {
      resultMsg.textContent = "❌ Some matches are wrong. Try again!";
      resultMsg.style.color = "red";
      resultMsg.style.animation = "none";
    }
  });

  /* reset */
  resetBtn.addEventListener("click", () => {
    resultMsg.textContent = "";
    resultMsg.style.animation = "none";

    /* rebuild left column */
    const col = document.querySelector(".left-column");
    col.innerHTML = "";

    [
      { id:"ghost",   src:"ghost.png",   name:"Fatima" },
      { id:"control", src:"control.png", name:"Asini"  },
      { id:"doer",    src:"doer.png",    name:"Mariam" }
    ].forEach(ch => {
      const box = document.createElement("div");
      box.className = "character-box";
      const img = document.createElement("img");
      img.src = ch.src; img.id = ch.id; img.alt = ch.name; img.draggable = true;
      img.addEventListener("dragstart", e => {
        e.dataTransfer.setData("text/plain", img.id);
      });
      const p = document.createElement("p"); p.textContent = ch.name;
      box.append(img, p); col.appendChild(box);
    });

    /* reset dropzones */
    dropzones.forEach(z => {
      z.textContent = originals[z.dataset.correct];
      z.style.backgroundColor = "#fff2ec";
    });
  });
}

/* ====================================================================== */
/* ===========================  SCORE PAGE  ============================= */
/* ====================================================================== */
else if (page.includes("score")) {
  const submit = document.getElementById("submit-scores-button");
  const inputs = document.querySelectorAll(".score-input");

  if (submit) {
    submit.addEventListener("click", () => {
      inputs.forEach(inp => {
        const div = document.createElement("div");
        div.className = "score-display";
        div.textContent = "Actual Score: 97";
        inp.parentElement.appendChild(div);
        inp.disabled = true;
      });
      submit.disabled = true;

      const txt = document.createElement("div");
      txt.textContent = "Reality of Group Projects";
      txt.style.cssText =
        "margin-top:20px;font-weight:bold;font-size:22px;color:#FF8C00";
      submit.parentElement.appendChild(txt);
    });
  }
}
