let currentPanel = 1;
const totalPanels = 6;

function updatePanel() {
    document.getElementById("panel").src = `page${currentPanel}.png`;
    document.getElementById("title").style.display = currentPanel === 1 ? "block" : "none";
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

window.onload = updatePanel;
