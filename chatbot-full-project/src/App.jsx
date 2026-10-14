import { useState, useEffect } from "react";
import ChatInput from "./components/ChatInput";
import ChatMessages from "./components/ChatMessages";
import "./App.css";

function App() {
  const [chatMessages, setChatMessages] = useState(
    // [
    // {
    //   message: " hello chatbot",
    //   sender: "user",
    //   id: "id1",
    // },
    // {
    //   message: " Hello! How can I help you?",
    //   sender: "robot",
    //   id: "id2",
    // },
    // {
    //   message: " can you get me todays date?",
    //   sender: "user",
    //   id: "id3",
    // },
    // {
    //   message: `Today is ${new Date().toLocaleString()}`,
    //   sender: "robot",
    //   id: "id4",
    // },]
    [],
  );
  useEffect(() => {
    localStorage.setItem("messages", JSON.stringify(chatMessages));
  }, [chatMessages]);
  // const [chatMessages, setChatMessages] =array;
  //   const chatMessages = array[0];
  // const setChatMessages = array[1];
  return (
    <div className="app-container">
      {chatMessages.length === 0 && (
        <div style={{ textAlign: "center" }}>
          Welcome to the chatbot project! Send a message using the textbox
          below.
        </div>
      )}
      <ChatMessages chatMessages={chatMessages} />

      <ChatInput
        chatMessages={chatMessages}
        setChatMessages={setChatMessages}
      />
    </div>
  );
}

export default App;
