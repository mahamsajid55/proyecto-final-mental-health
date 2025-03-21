const chatBox = document.getElementById("chat-box");
const userInput = document.getElementById("user-input");

function sendMessage() {
    let userText = userInput.value.trim();
    if (userText === "") return;

    // Add user message
    addMessage("You", userText);

    // Generate bot response
    setTimeout(() => {
        let botResponse = getBotResponse(userText);
        addMessage("Bot", botResponse);
    }, 500);

    userInput.value = "";
}

function addMessage(sender, text) {
    let messageDiv = document.createElement("div");
    messageDiv.innerHTML = `<strong>${sender}:</strong> ${text}`;
    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function getBotResponse(input) {
    input = input.toLowerCase();

    // Mental Health Q&A
    if (input.includes("hello") || input.includes("hi")) {
        return "Hello! How are you feeling today? 😊";
    } else if (input.includes("anxiety")) {
        return "Anxiety can feel overwhelming. Try deep breathing, mindfulness, or talking to someone you trust. 🧘‍♂️";
    } else if (input.includes("stress")) {
        return "Managing stress is important. Exercise, meditation, and taking breaks can help. Want a relaxation tip? 🌿";
    } else if (input.includes("depression")) {
        return "If you're feeling down, remember that you're not alone. Reach out to a friend or therapist. Talking helps. 💙";
    } else if (input.includes("sleep")) {
        return "Good sleep hygiene includes a regular sleep schedule, avoiding screens before bed, and relaxation techniques. 😴";
    } else if (input.includes("exercise")) {
        return "Exercise is great for mental health! Even a short walk can boost your mood. 🚶‍♂️";
    } else if (input.includes("journaling")) {
        return "Journaling can help organize your thoughts and emotions. Try writing down 3 things you're grateful for today. ✍️";
    } else if (input.includes("hopeless")) {
        return "I'm really sorry you're feeling this way. You're not alone. Please consider talking to someone who can support you. 💙";
    } else {
        return "I'm still learning! Try asking about anxiety, stress, depression, or self-care. 💙";
    }
}

// Allow sending message by pressing Enter
userInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
});
