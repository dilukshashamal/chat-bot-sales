const chatWindow = document.getElementById("chat-window");
const chatForm = document.getElementById("chat-form");
const userInput = document.getElementById("user-input");

chatForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const userMessage = userInput.value;
    addMessageToChat("You", userMessage);
    getBotResponse(userMessage);
    userInput.value = "";
});

function addMessageToChat(sender, message) {
    const messageElement = document.createElement("div");
    messageElement.classList.add("message");
    if (sender === "You") {
        messageElement.classList.add("user-message");
    } else {
        messageElement.classList.add("bot-message");
    }
    messageElement.innerHTML = `
    <div class="message-sender">${sender}:</div>
    <div class="message-text">${message}</div>
  `;
    chatWindow.appendChild(messageElement);
    chatWindow.scrollTop = chatWindow.scrollHeight;
}
//need to get response from Bot
