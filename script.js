function sendMessage() {
    let inputField = document.getElementById("userInput");
    let input = inputField.value.toLowerCase().trim();
    let chatBox = document.getElementById("chatBox");

    if (input === "") return;

    // Show user message
    chatBox.innerHTML += `<div class='user-message'>You: ${input}</div>`;

    let response = getBotResponse(input);

    // Show bot message
    chatBox.innerHTML += `<div class='bot-message'>Bot: ${response}</div>`;

    inputField.value = "";
    chatBox.scrollTop = chatBox.scrollHeight;
}

function getBotResponse(input) {

    if (input.includes("fried rice")) {
        return `To make Fried Rice:<br>
        1. Heat oil.<br>
        2. Add vegetables.<br>
        3. Add cooked rice.<br>
        4. Add soy sauce.<br>
        5. Stir fry for 5 minutes.`;
    }

    else if (input.includes("pasta")) {
        return `To make Pasta:<br>
        1. Boil water.<br>
        2. Add pasta.<br>
        3. Cook 8-10 minutes.<br>
        4. Add sauce.<br>
        5. Serve hot.`;
    }

    else if (input.includes("tea")) {
        return `To make Tea:<br>
        1. Boil water.<br>
        2. Add tea powder.<br>
        3. Add milk.<br>
        4. Add sugar.<br>
        5. Boil for 2 minutes.`;
    }

    else {
        return "Sorry! I only know recipes for Fried Rice, Pasta, and Tea.";
    }
}