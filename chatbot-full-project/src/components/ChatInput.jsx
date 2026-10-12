import { useState } from 'react'
import {Chatbot} from 'supersimpledev'
import './ChatInput.css'
function ChatInput({ chatMessages, setChatMessages }) {
        const [inputText, setInputText] = useState("");

        function saveInputText(event) {
          setInputText(event.target.value);
        }

        async function sendMessage() {
          // const [isLoading, setIsLoading] = useState(false);
          const newChatMessages = [
            ...chatMessages,
            {
              message: inputText,
              sender: "user",
              id: crypto.randomUUID(),
            },
          ];
          setChatMessages(newChatMessages);
          // Clear the input immediately.
          setInputText("");

          // Display the loading message.
          // setIsLoading(true);
          const response = await Chatbot.getResponseAsync(inputText);
          setChatMessages([
            ...newChatMessages,
            {
              message: response,
              sender: "robot",
              id: crypto.randomUUID(),
            },
          ]);
          
          // setIsLoading(true);
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
            <button onClick={sendMessage} className="send-button">
              Send
            </button>
          </div>
        );
      }

export  default ChatInput;      