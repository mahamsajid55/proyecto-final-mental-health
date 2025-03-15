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
    
    // Simple Responses
    if (input.includes("hello") || input.includes("hi")) {
        return "Hello! How are you feeling today? 😊";
    } else if (input.includes("sad")) {
        return "I'm here for you. Would you like to try a relaxation exercise? 🧘";
    } else if (input.includes("happy")) {
        return "That's great to hear! Keep shining! ✨";
    } else {
        return "I'm still learning! Try asking about mood, exercises, or journaling. 💙";
    }
}

// Allow sending message by pressing Enter
userInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
});
