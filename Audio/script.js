//const dayTimestamps = [0, 34, 58, 94, 139, 185];
const audio = document.getElementById('audio');
const playPauseBtn = document.getElementById('play-pause-btn');
const progressBar = document.querySelector('.progress-bar');
const progressFilled = document.querySelector('.progress-filled');
const timeDisplay = document.getElementById('time-display');
const notes = document.querySelectorAll('.note');

// Define the timestamps for each diary day in seconds. Adjust these values as needed.
const dayTimestamps = [0, 34, 58, 93, 139, 185];

// All notes are clickable: clicking a note jumps to its corresponding time.
notes.forEach((note, index) => {
  note.addEventListener('click', () => {
    audio.currentTime = dayTimestamps[index];
  });
});

playPauseBtn.addEventListener('click', () => {
  if (audio.paused) {
    audio.play();
    playPauseBtn.innerHTML = "&#10074;&#10074;";
  } else {
    audio.pause();
    playPauseBtn.innerHTML = "&#9658;";
  }
});

progressBar.addEventListener('click', (e) => {
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

  updateActiveNote(audio.currentTime);
});

function updateActiveNote(currentTime) {
  let activeIndex = 0;
  for (let i = dayTimestamps.length - 1; i >= 0; i--) {
    if (currentTime >= dayTimestamps[i]) {
      activeIndex = i;
      break;
    }
  }
  notes.forEach((note, index) => {
    if (index === activeIndex) {
      note.classList.add('active');
      note.classList.add('pulse');
    } else {
      note.classList.remove('active');
      note.classList.remove('pulse');
    }
  });
}
