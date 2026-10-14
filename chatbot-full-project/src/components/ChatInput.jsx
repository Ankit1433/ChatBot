import { useState } from "react";
import { Chatbot } from "supersimpledev";
import Dayjs from "dayjs";
import "./ChatInput.css";
function ChatInput({ chatMessages, setChatMessages }) {
  const [isLoading, setIsLoading] = useState(false);
  const [inputText, setInputText] = useState("");

  function saveInputText(event) {
    setInputText(event.target.value);
  }

  async function SendMessage() {
    const newChatMessages = [
      ...chatMessages,
      {
        message: inputText,
        sender: "user",
        id: crypto.randomUUID(),
        time: Dayjs().valueOf(),
      },
    ];
    setChatMessages([
      ...newChatMessages,
      {
        message: (
          <div>
            <img
              style={{ height: "50px", margin: "-15px" }}
              src="./loading-spinner.gif"
            ></img>
          </div>
        ),
        sender: "robot",
        id: "loading",
        time: Dayjs().valueOf(),
      },
    ]);
    // Clear the input immediately.
    setInputText("");

    // Display the loading message.
    setIsLoading(true);
    const response = await Chatbot.getResponseAsync(inputText);
    setChatMessages([
      ...newChatMessages,
      {
        message: response,
        sender: "robot",
        id: crypto.randomUUID(),
      },
    ]);

    setIsLoading(false);
  }

  function clearMessage() {
    setChatMessages([]);
  }
  return (
    <div className="chat-input-container">
      <input
        placeholder="Send a message to Chatbot"
        size="30"
        onChange={saveInputText}
        value={inputText}
        className="chat-input"
      />
      <button
        onClick={SendMessage}
        className="send-button"
        disabled={isLoading || inputText.trim() === ""}
      >
        Send
      </button>
      <button onClick={clearMessage} className="clear-button">
        Clear
      </button>
    </div>
  );
}

export default ChatInput;
