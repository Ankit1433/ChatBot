 import './ChatMessage.css';
 function ChatMessage({ message, sender }) {
        // const message = props.message;
        // const sender = props.sender;
        // const { message, sender } = props;

        /*
        if (sender == "robot") {
          return (
            <div>
              <img src="./robot.png" width="50" />
              {props.message}
            </div>
          );
        } else {
        */
        return (
          <div
            className={
              sender === "user" ? "chat-message-user" : "chat-message-robot"
            }
          >
            {sender === "robot" && (
              <img src='/src/assets/robot.png' className="chat-message-profile" />
            )}
            <div className="chat-message-text">{message}</div>
            {sender === "user" && (
              <img src='/src/assets/user.png' className="chat-message-profile" />
            )}
          </div>
        );
      }
export default ChatMessage;