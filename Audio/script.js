const audio = document.getElementById('audio');
const playPauseBtn = document.getElementById('play-pause-btn');
const progressBar = document.querySelector('.progress-bar');
const progressFilled = document.querySelector('.progress-filled');
const timeDisplay = document.getElementById('time-display');
const notes = document.querySelectorAll('.note');

// Define timestamps in seconds for each diary day.
// Example: Day 1 starts at 0 sec, Day 2 at 30 sec, Day 3 at 55 sec (30 + 25), etc.
// Adjust these values as needed for your audio.
const dayTimestamps = [0, 34, 58, 93, 139, 185];

playPauseBtn.addEventListener('click', () => {
  if (audio.paused) {
    audio.play();
    playPauseBtn.innerHTML = "&#10074;&#10074;";
  } else {
    audio.pause();
    playPauseBtn.innerHTML = "&#9658;";
  }
});

audio.addEventListener('timeupdate', () => {
  let percent = (audio.currentTime / audio.duration) * 100;
  progressFilled.style.width = percent + '%';
  
  let remaining = audio.duration - audio.currentTime;
  let minutes = Math.floor(remaining / 60);
  let seconds = Math.floor(remaining % 60);
  seconds = seconds < 10 ? '0' + seconds : seconds;
  timeDisplay.textContent = `${minutes}:${seconds}`;
  
  // Update which note is active based on the current time.
  updateActiveNote(audio.currentTime);
});

progressBar.addEventListener('click', (e) => {
  const rect = progressBar.getBoundingClientRect();
  const offsetX = e.clientX - rect.left;
  const newTime = (offsetX / progressBar.offsetWidth) * audio.duration;
  audio.currentTime = newTime;
});

function updateActiveNote(currentTime) {
  // Determine which day/note should be active based on the current time.
  let activeIndex = 0;
  for (let i = dayTimestamps.length - 1; i >= 0; i--) {
    if (currentTime >= dayTimestamps[i]) {
      activeIndex = i;
      break;
    }
  }
  // Apply the 'active' class to the corresponding note image.
  notes.forEach((note, index) => {
    if(index === activeIndex) {
      note.classList.add('active');
    } else {
      note.classList.remove('active');
    }
  });
}
