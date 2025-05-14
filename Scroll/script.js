let texts = [
    "Let's begin!",
    "What a wonderful adventure!",
    "Goodbye, traveler."
];

document.addEventListener('scroll', function() {
    let scrollPosition = window.scrollY;
    let sectionHeight = window.innerHeight;
    let sectionIndex = Math.floor(scrollPosition / sectionHeight);
    
    document.getElementById('character-text').innerText = texts[sectionIndex];
});
