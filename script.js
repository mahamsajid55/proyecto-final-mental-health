
const quotes = [
    "Your mental health is a priority. Your happiness is essential.",
    "Healing takes time, and asking for help is a courageous step.",
    "You are stronger than you think, and you are never alone.",
    "Every day may not be good, but there is something good in every day.",
    "Be kind to yourself. You’re doing the best you can.",
    "Your mind is your garden. Your thoughts are your seeds. You can grow flowers, or you can grow weeds.",
    "It’s okay to not be okay, but never stop trying to be better.",
    "Small progress is still progress. Keep going!",
    "Give yourself the same kindness you give to others.",
    "You are not your thoughts. You are not your anxiety. You are so much more."
];

function showRandomQuote() {
    let randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById("motivational-quote").innerText = quotes[randomIndex];
}

// Show a new quote every 5 seconds automatically
setInterval(showRandomQuote, 5000);
// Array of relaxation tips
const relaxationTips = [
    "Take a deep breath and count to five before exhaling.",
    "Listen to your favorite calming music for 10 minutes.",
    "Step outside and enjoy a few moments of fresh air.",
    "Write down three things you’re grateful for today.",
    "Stretch your body for a few minutes to release tension.",
    "Drink a warm cup of herbal tea and relax.",
    "Turn off your phone for 30 minutes and enjoy the silence.",
    "Try a short guided meditation session.",
    "Read a book or a few pages of something inspiring.",
    "Close your eyes and visualize a peaceful place."
];

// Function to show a new tip daily
function showDailyTip() {
    let today = new Date().getDate();
    let tipIndex = today % relaxationTips.length;
    document.getElementById("dailyTip").innerText = relaxationTips[tipIndex];
}

// Run function on page load
showDailyTip();

// Dark Mode Toggle
document.getElementById("darkModeToggle").addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
});


