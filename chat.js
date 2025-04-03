function sendMessage() {
    var userInput = document.getElementById("user-input").value;
    var chatlog = document.getElementById("chatlog");

    // Show user's message in the chat log
    chatlog.innerHTML += "<div><strong>You:</strong> " + userInput + "</div>";

    // Send user's input to Flask backend to get a response
    fetch(`/get_response?message=${userInput}`)
        .then(response => response.json())
        .then(data => {
            // Display bot's response
            chatlog.innerHTML += "<div><strong>Bot:</strong> " + data.response + "</div>";
            document.getElementById("user-input").value = ""; // Clear input field
            chatlog.scrollTop = chatlog.scrollHeight; // Scroll chat log to the bottom
        });
}