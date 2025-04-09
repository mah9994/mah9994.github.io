//const dayTimestamps = [0, 34, 58, 94, 139, 185];
const audio = document.getElementById('audio');
const playPauseBtn = document.getElementById('play-pause-btn');
const progressBar = document.querySelector('.progress-bar');
const progressFilled = document.querySelector('.progress-filled');
const timeDisplay = document.getElementById('time-display');
const notes = document.querySelectorAll('.note');

// Define the timestamps for each diary day in seconds. Adjust these values as needed.
const dayTimestamps = [0, 34, 58, 93, 139, 185];

let currentDay = 0;
let waitingForUser = true; // Start by waiting for the first note to be clicked

function makeNoteClickable(index) {
  notes[index].classList.add('clickable');
  notes[index].classList.add('pulse');
}

function removeClickable(index) {
  notes[index].classList.remove('clickable');
  notes[index].classList.remove('pulse');
}

// Initially, make first note clickable with pulse effect.
makeNoteClickable(0);

notes.forEach((note, index) => {
  note.addEventListener('click', () => {
    if (note.classList.contains('clickable') && waitingForUser && index === currentDay) {
      waitingForUser = false;
      removeClickable(index);
      audio.currentTime = dayTimestamps[currentDay];
      audio.play();
      playPauseBtn.innerHTML = "&#10074;&#10074;";
    }
  });
});

playPauseBtn.addEventListener('click', () => {
  if (audio.paused && !waitingForUser) {
    audio.play();
    playPauseBtn.innerHTML = "&#10074;&#10074;";
  } else if (!audio.paused) {
    audio.pause();
    playPauseBtn.innerHTML = "&#9658;";
  }
});

progressBar.addEventListener('click', (e) => {
  if (waitingForUser) return;
  const rect = progressBar.getBoundingClientRect();
  const offsetX = e.clientX - rect.left;
  const newTime = (offsetX / progressBar.offsetWidth) * audio.duration;
  audio.currentTime = newTime;
});

audio.addEventListener('timeupdate', () => {
  let percent = (audio.currentTime / audio.duration) * 100;
  progressFilled.style.width = percent + '%';
  
  let remaining = audio.duration - audio.currentTime;
  let minutes = Math.floor(remaining / 60);
  let seconds = Math.floor(remaining % 60);
  seconds = seconds < 10 ? '0' + seconds : seconds;
  timeDisplay.textContent = `${minutes}:${seconds}`;

  // When audio is playing, highlight the active note with enlarged size and yellow border.
  if (!waitingForUser) {
    notes.forEach((note, index) => {
      if (index === currentDay) {
        note.classList.add('active');
      } else {
        note.classList.remove('active');
      }
    });
  } else {
    notes.forEach(note => note.classList.remove('active'));
  }
  
  // Pause the audio when the next day's segment is reached.
  /*if (!waitingForUser && currentDay < dayTimestamps.length - 1) {
    let nextDayStart = dayTimestamps[currentDay + 1];
    if (audio.currentTime >= nextDayStart) {
      audio.pause();
      playPauseBtn.innerHTML = "&#9658;";
      currentDay++;
      waitingForUser = true;
      makeNoteClickable(currentDay);
    }
  }*/
});
