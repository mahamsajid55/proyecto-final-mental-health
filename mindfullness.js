// ✅ Check if JavaScript file is loading
console.log("✅ JavaScript file loaded successfully!");

// 🕰️ Timer Function
function startTimer() {
    console.log("⏳ startTimer() function called!");

    let minutes = parseInt(document.getElementById("timerInput").value);
    if (isNaN(minutes) || minutes <= 0) {
        alert("⚠️ Please enter a valid number of minutes!");
        return;
    }

    let seconds = minutes * 60;
    let display = document.getElementById("timerDisplay");

    function updateTimer() {
        let min = Math.floor(seconds / 60);
        let sec = seconds % 60;
        display.innerHTML = `⏳ Time Left: ${min}:${sec < 10 ? '0' : ''}${sec}`;
        console.log(`Timer: ${min}:${sec}`);

        if (seconds > 0) {
            seconds--;
            setTimeout(updateTimer, 1000);
        } else {
            display.innerHTML = "🎉 Time's up! Take a deep breath 😊";
        }
    }

    updateTimer();
}

// 🌟 Quote Generator
const quotes = [
   "Be present in all things and thankful for all things. – Maya Angelou",
        "The mind is like water. When it is turbulent, it's difficult to see. – Thich Nhat Hanh",
        "Happiness is not something ready-made. It comes from your own actions. – Dalai Lama",
        "Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment. – Buddha",
        "Almost everything will work again if you unplug it for a few minutes, including you. – Anne Lamott",
        "Smile, breathe, and go slowly. – Thich Nhat Hanh",
        "You cannot control the results, only your actions. – Allan Lokos",
        "Every morning we are born again. What we do today matters most. – Buddha",
        "Keep your face always toward the sunshine—and shadows will fall behind you. – Walt Whitman",
        "Your mind is a powerful thing. When you fill it with positive thoughts, your life will start to change."
];

function generateQuote() {
    console.log("📖 generateQuote() function called!");

    let randomIndex = Math.floor(Math.random() * quotes.length);
    let quoteElement = document.getElementById("mindfulnessQuote");

    if (quoteElement) {
        quoteElement.innerHTML = `🌿 "${quotes[randomIndex]}"`;
        console.log(`New Quote: "${quotes[randomIndex]}"`);
    } else {
        console.error("❌ Element with ID 'mindfulnessQuote' not found!");
    }
}

// ✅ Debugging
console.log("✅ Script executed without errors!");
