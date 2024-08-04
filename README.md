# Flask Messaging Application

This Flask application provides a simple messaging interface where users can send and retrieve messages. The application includes dynamic messaging functionality using JavaScript to update the chat box in real-time.

## Features

- **Index Page**: Displays the main interface for sending and receiving messages.
- **Send Message Endpoint**: Processes POST requests to send a new message and stores it in memory.
- **Get Messages Endpoint**: Processes GET requests to retrieve all stored messages.
- **Real-Time Messaging**: Uses JavaScript to dynamically fetch and display messages without refreshing the page.

## Installation

1. Clone the repository:

    ```sh
    git clone https://github.com/shekoder/CHAT-app.git
    cd CHAT-app
    ```

2. Install the required Python libraries:

    ```sh
    pip install Flask
    ```

## Usage

1. Run the Flask application:

    ```sh
    python app.py
    ```

2. Open your web browser and navigate to `http://127.0.0.1:5000/`.

3. Use the interface to send and receive messages. The chat box will update automatically every 2 seconds with new messages.

## Application Structure

- `app.py`: The main Python script for the Flask application.
- `template/index.html`: The HTML file for the messaging interface (you need to create this file and include the necessary HTML structure).
- `static/js/main.js`: The JavaScript file that handles sending messages and updating the chat box (you should create this file and include the provided JavaScript code).

## Example

- **Sending a Message**:
    - Endpoint: `/send_message`
    - Method: POST
    - Payload: `{ "message": "Hello, World!" }`

- **Retrieving Messages**:
    - Endpoint: `/get_messages`
    - Method: GET
    - Response: `{ "messages": ["Hello, World!"] }`
