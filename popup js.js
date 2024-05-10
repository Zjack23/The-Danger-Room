function openChat() {
  document.getElementById("chat-popup").style.display = "block";
}

function closeChat() {
  document.getElementById("chat-popup").style.display = "none";
}

function sendMessage() {
  var userInput = document.getElementById("user-input").value;
  var chatLog = document.getElementById("chat-log");
  
  // Display user's message
  chatLog.innerHTML += "<strong>You:</strong> " + userInput + "<br>";
  
  // Call ChatGPT to get response
  var response = getChatGPTResponse(userInput);
  
  // Display ChatGPT's response
  chatLog.innerHTML += "<strong>ChatGPT:</strong> " + response + "<br>";
  
  // Clear input field
  document.getElementById("user-input").value = "";
}

function getChatGPTResponse(input) {
  // You can call an API here to get ChatGPT's response
  // For example, using Fetch API
  // Replace this with your actual API endpoint
  return fetch( sk-help-me-out-service-key-I3a7i8IkqGVAEe3iUc0LT3BlbkFJ4zAgUNXxOLlCNMkNJR9h, {
    method: 'POST',
    body: JSON.stringify({ input: input }),
    headers: {
      'Content-Type': 'application/json'
    },
  })
  .then(response => response.json())
  .then(data => data.response)
  .catch(error => console.error('Error:', error));
}  sk-help-me-out-service-key-I3a7i8IkqGVAEe3iUc0LT3BlbkFJ4zAgUNXxOLlCNMkNJR9h 