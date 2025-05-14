// Simple fade-in effect
window.onload = () => {
    document.body.style.opacity = 0;
    setTimeout(() => {
      document.body.style.transition = "opacity 1s";
      document.body.style.opacity = 1;
      console.log("Page has faded in");
    }, 100);
  };

// Some sound when hovering
const hoverSound = new Audio("sounds/hover.mp3"); // must be a short mp3 file

document.querySelectorAll(".project-box").forEach(box => {
    box.addEventListener("mouseenter", () => {
        hoverSound.play();
    });
});
  
// Click alert for project boxes (can later be replaced with modal)
document.querySelectorAll(".project-box").forEach(box => {
    box.addEventListener("click", () => {
      alert("More project info coming soon!");
      console.log("Project clicked");
    });
});