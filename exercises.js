//hamburgesa//
function toggleMenu() {
    let nav = document.getElementById("nav-menu");
    nav.classList.toggle("show-menu");
}

// Array of daily relaxation tips
const relaxationTips = [
    "Take a deep breath and count to five. Inhale... Exhale...",
    "Step outside for fresh air and let nature refresh your mind.",
    "Try a quick 5-minute meditation to clear your thoughts.",
    "Stretch your body to release tension and feel more relaxed.",
    "Write down three things you're grateful for today.",
    "Listen to your favorite soothing music and unwind.",
    "Drink a warm cup of herbal tea and enjoy the moment.",
    "Take a break from screens and do something creative.",
    "Try a simple breathing exercise: Breathe in for 4 seconds, hold for 7, exhale for 8.",
    "Smile! Even a small smile can boost your mood instantly.",
    "Read a few pages of a book you love to escape for a moment.",
    "Light a candle or use essential oils to create a calming atmosphere.",
    "Do a quick body scan—relax your shoulders, unclench your jaw, and breathe.",
    "Write down your thoughts in a journal to clear your mind.",
    "Go for a short walk and focus on the sights and sounds around you.",
    "Hug someone or give yourself a gentle self-hug for comfort.",
    "Close your eyes and imagine a peaceful place for one minute.",
    "Take a warm bath or shower to relax your muscles.",
    "Turn off notifications and enjoy a moment of silence.",
    "Declutter your space—it helps declutter your mind too.",
    "Watch a funny video or read something that makes you laugh.",
    "Lay down and put your legs up against the wall for a few minutes.",
    "Squeeze a stress ball or play with something tactile to ease tension.",
    "Do a guided meditation or listen to nature sounds.",
    "Practice mindful eating—focus on flavors and textures while eating.",
    "Say a positive affirmation: 'I am calm, I am at peace.'",
    "Color in an adult coloring book or doodle for fun.",
    "Do a yoga pose like Child’s Pose or Downward Dog for relaxation.",
    "Turn on your favorite playlist and dance it out!",
    "Spend a few minutes petting an animal or watching cute animal videos."
];

// Function to display a random tip
function showDailyTip() {
    const randomIndex = Math.floor(Math.random() * relaxationTips.length);
    document.getElementById("dailyTip").innerText = relaxationTips[randomIndex];
}

// Display a tip when the page loads
window.onload = showDailyTip;
