# CHAT-app
# Voice Assistant

This is a simple voice assistant project built in Python that converts spoken language into text. It uses the `SpeechRecognition` library for speech-to-text conversion and the `pyttsx3` library for text-to-speech (although text-to-speech functionality is not yet implemented in this version).

## Features

- **Speech Recognition**: Converts spoken language into text.
- **Text-to-Speech**: Placeholder for future implementation.

## Requirements

- Python 3.x
- Libraries:
  - `SpeechRecognition`
  - `pyttsx3`
  - `pyaudio`

## Installation

1. Clone the repository:

    ```sh
    git clone https://github.com/shekoder/voice-assistant.git
    cd voice-assistant
    ```

2. Install the required libraries:

    ```sh
    pip install SpeechRecognition pyttsx3 pyaudio
    ```

## Usage

1. Run the script to start the voice assistant:

    ```sh
    python voice_assistant.py
    ```

2. Speak into your microphone when prompted. The assistant will recognize your speech and print the converted text.

## Example

Here's an example of how the output might look:

```plaintext
Say something!
You said: Hello, how are you?
