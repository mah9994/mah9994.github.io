let currentPanel = 1;
const totalPanels = 6;
let firstPanelClickCount = 0;
let secondPanelClickCount = 0;

function updatePanel() {
    document.getElementById("panel").src = `page${currentPanel}.png`;
    document.getElementById("title").style.display = currentPanel === 1 ? "block" : "none";

    // Dynamically change the background image.
    document.body.style.backgroundImage = `url('background${currentPanel}.png')`;

    if (currentPanel === 1) {
        // Reset panel 1 interactions.
        firstPanelClickCount = 0;
        document.getElementById("speech1").classList.add("hidden");
        document.getElementById("speech1").classList.remove("visible");
        document.getElementById("paper").classList.add("hidden");
        document.getElementById("speech2").classList.add("hidden");
        document.getElementById("speech2").classList.remove("visible");

        // Hide panel 2 elements.
        let oxygen = document.getElementById("oxygen");
        if (oxygen) oxygen.style.display = "none";
        let beryllium = document.getElementById("beryllium");
        if (beryllium) beryllium.style.display = "none";
    } else if (currentPanel === 2) {
        // Reset panel 2 interactions.
        secondPanelClickCount = 0;

        // Show Oxygen image in its initial position.
        let oxygen = document.getElementById("oxygen");
        oxygen.style.display = "block";
        oxygen.style.position = "absolute";
        oxygen.style.right = "10%";  // Adjust as needed.
        oxygen.style.top = "40%";    // Adjust as needed.

        // Setup Beryllium off-screen to the left.
        let beryllium = document.getElementById("beryllium");
        beryllium.style.display = "none";
        beryllium.style.position = "absolute";
        beryllium.style.left = "-100px";
        beryllium.style.top = "40%";  // Align vertically with Oxygen.

        // Hide panel 2 speech bubbles.
        document.getElementById("speech3").classList.add("hidden");
        document.getElementById("speech3").classList.remove("visible");
        document.getElementById("speech4").classList.add("hidden");
        document.getElementById("speech4").classList.remove("visible");
        document.getElementById("speech5").classList.add("hidden");
        document.getElementById("speech5").classList.remove("visible");
    } else {
        // For other panels, hide panel 2 elements.
        let oxygen = document.getElementById("oxygen");
        if (oxygen) oxygen.style.display = "none";
        let beryllium = document.getElementById("beryllium");
        if (beryllium) beryllium.style.display = "none";
    }
}

function nextPanel(e) {
    e.stopPropagation(); // Prevent triggering handleClick.
    if (currentPanel < totalPanels) {
        currentPanel++;
        updatePanel();
    }
}

function prevPanel(e) {
    e.stopPropagation();
    if (currentPanel > 1) {
        currentPanel--;
        updatePanel();
    }
}

function handleClick() {
    if (currentPanel === 1) {
        firstPanelClickCount++;

        if (firstPanelClickCount === 1) {
            document.getElementById("speech1").classList.remove("hidden");
            document.getElementById("speech1").classList.add("visible");
        } else if (firstPanelClickCount === 2) {
            document.getElementById("speech1").classList.remove("visible");
            document.getElementById("speech1").classList.add("hidden");
            let paper = document.getElementById("paper");
            paper.classList.remove("hidden");
            paper.style.animation = "tossPaper 1.5s forwards";
        } else if (firstPanelClickCount === 3) {
            document.getElementById("speech2").classList.remove("hidden");
            document.getElementById("speech2").classList.add("visible");
        }
    } else if (currentPanel === 2) {
        secondPanelClickCount++;

        if (secondPanelClickCount === 1) {
            // Beryllium enters from the left to stand left of Oxygen.
            let beryllium = document.getElementById("beryllium");
            beryllium.style.display = "block";
            beryllium.style.transition = "left 1s ease-in-out";
            // Adjust the target left position as needed.
            beryllium.style.left = "60%";
        } else if (secondPanelClickCount === 2) {
            // Reveal the speech bubble from Beryllium (Oxygen's dialogue).
            document.getElementById("speech3").classList.remove("hidden");
            document.getElementById("speech3").classList.add("visible");

            document.getElementById("panel2-element").classList.remove("hidden");
            document.getElementById("panel2-element").classList.add("visible");
        } else if (secondPanelClickCount === 3) {
            // Reveal the speech bubble from Oxygen (Beryllium's dialogue).
            document.getElementById("speech4").classList.remove("hidden");
            document.getElementById("speech4").classList.add("visible");
        } else if (secondPanelClickCount === 4) {
            // Reveal the final speech bubble from Beryllium (Oxygen's awkward reply).
            document.getElementById("speech5").classList.remove("hidden");
            document.getElementById("speech5").classList.add("visible");
        }
    }
}

window.onload = updatePanel;
