// Toggle Mobile Navigation Menu
function toggleMenu() {
    let nav = document.querySelector("nav");
    nav.style.display = nav.style.display === "flex" ? "none" : "flex";
}

// Mindfulness Timer Function
function startTimer() {
    let minutes = document.getElementById("timerInput").value;
    let seconds = minutes * 60;
    let display = document.getElementById("timerDisplay");

    function updateTimer() {
        let min = Math.floor(seconds / 60);
        let sec = seconds % 60;
        display.innerHTML = `Time Left: ${min}:${sec < 10 ? '0' : ''}${sec}`;
        if (seconds > 0) {
            seconds--;
            setTimeout(updateTimer, 1000);
        } else {
            display.innerHTML = "Time's up! Take a deep breath 😊";
        }
    }
    updateTimer();
}

// Daily Mindfulness Quote Generator
const quotes = [
    "Be present in all things and thankful for all things. – Maya Angelou",
    "The mind is like water. When it is turbulent, it's difficult to see. – Thich Nhat Hanh",
    "Happiness is not something ready-made. It comes from your own actions. – Dalai Lama",
    "Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment. – Buddha",
    "Almost everything will work again if you unplug it for a few minutes, including you. – Anne Lamott"
];

function generateQuote() {
    let randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById("mindfulnessQuote").innerHTML = quotes[randomIndex];
}
