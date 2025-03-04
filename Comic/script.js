let currentPanel = 1;
const totalPanels = 6;
let firstPanelClickCount = 0;

function updatePanel() {
    document.getElementById("panel").src = `page${currentPanel}.png`;
    document.getElementById("title").style.display = currentPanel === 1 ? "block" : "none";

    // Change background image dynamicallyyy
    document.body.style.backgroundImage = `url('background${currentPanel}.png')`;

    // Reset interactions for panel 1
    if (currentPanel !== 1) {
        firstPanelClickCount = 0;
        document.getElementById("speech1").classList.add("hidden");
        document.getElementById("speech1").classList.remove("visible");
        document.getElementById("paper").classList.add("hidden");
        document.getElementById("speech2").classList.add("hidden");
        document.getElementById("speech2").classList.remove("visible");
    }
}

function nextPanel() {
    if (currentPanel < totalPanels) {
        currentPanel++;
        updatePanel();
    }
}

function prevPanel() {
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
            document.getElementById("paper").classList.remove("hidden"); 
            document.getElementById("paper").style.animation = "tossPaper 1.5s forwards";
        } else if (firstPanelClickCount === 3) {
            document.getElementById("speech2").classList.remove("hidden");
            document.getElementById("speech2").classList.add("visible");
        }
    }
}

window.onload = updatePanel;
