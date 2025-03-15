//hamburgesa//
function toggleMenu() {
    let nav = document.getElementById("nav-menu");
    nav.classList.toggle("show-menu");
}



// Function to save mood to local storage
function saveMood() {
    const mood = document.getElementById("moodSelect").value;
    let moods = JSON.parse(localStorage.getItem("moods")) || [];
    moods.push({ date: new Date().toLocaleDateString(), mood: mood });
    localStorage.setItem("moods", JSON.stringify(moods));
    displayMoodHistory();
}

// Function to display saved mood history
function displayMoodHistory() {
    let moods = JSON.parse(localStorage.getItem("moods")) || [];
    let historyText = moods.map(entry => `${entry.date}: ${entry.mood}`).join("<br>");
    document.getElementById("moodHistory").innerHTML = historyText;
}

// Function to save journal entry
function saveJournal() {
    const text = document.getElementById("journalText").value;
    let journals = JSON.parse(localStorage.getItem("journals")) || [];
    journals.push({ date: new Date().toLocaleDateString(), text: text });
    localStorage.setItem("journals", JSON.stringify(journals));
    alert("Journal entry saved!");
}

// Load saved data on page load
window.onload = function () {
    displayMoodHistory();
};


// Function to save journal entry
function saveJournal() {
    const text = document.getElementById("journalText").value;
    if (!text.trim()) {
        alert("Please write something before saving!");
        return;
    }

    let journals = JSON.parse(localStorage.getItem("journals")) || [];
    journals.push({ date: new Date().toLocaleDateString(), text: text });
    localStorage.setItem("journals", JSON.stringify(journals));

    document.getElementById("journalText").value = ""; // Clear text area
    displayJournalEntries(); // Update displayed entries
}

// Function to display saved journal entries
function displayJournalEntries() {
    let journals = JSON.parse(localStorage.getItem("journals")) || [];
    let journalList = document.getElementById("journalEntries");
    journalList.innerHTML = "";

    journals.forEach(entry => {
        let div = document.createElement("div");
        div.classList.add("entry");
        div.innerHTML = `<strong>${entry.date}</strong><p>${entry.text}</p>`;
        journalList.appendChild(div);
    });
}

// Load saved data when the page loads
window.onload = function () {
    displayJournalEntries();
};
