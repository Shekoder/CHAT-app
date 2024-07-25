document.addEventListener('DOMContentLoaded', function() {
    const sendButton = document.getElementById('send-button');
    const messageInput = document.getElementById('message-input');
    const chatBox = document.getElementById('chat-box');

    function fetchMessages() {
        fetch('/get_messages')
            .then(response => response.json())
            .then(data => {
                chatBox.innerHTML = '';
                data.messages.forEach(message => {
                    const messageElement = document.createElement('div');
                    messageElement.textContent = message;
                    chatBox.appendChild(messageElement);
                });
            });
    }

    sendButton.addEventListener('click', function() {
        const message = messageInput.value;
        fetch('/send_message', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: `message=${encodeURIComponent(message)}`
        })
        .then(response => response.json())
        .then(data => {
            messageInput.value = '';
            fetchMessages();
        });
    });

    // Fetch messages every 2 seconds
    setInterval(fetchMessages, 2000);
});
