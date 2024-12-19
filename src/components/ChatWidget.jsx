import React, { useState } from 'react';
import '../assets/css/embedcss.css'; // Updated CSS file
import Chat from './Chat'; // Import the chat app component

// Import the logo image
import logo from '../assets/img/logo_vpa.png';

const ChatWidget = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  // Toggle chat window visibility
  const toggleChat = () => {
    setIsChatOpen((prevState) => !prevState);
  };

  return (
    <div>
      {/* Floating Action Button */}
      <div className="fabs deep-orange float-animation" onClick={toggleChat}>
        <div className="floating">
          <div className="notch"></div>
          Hi! I am Your Virtual Assistant VPA ASSIST
        </div>
        <a id="prime" className="fab">
          <img src={logo} alt="Chat Widget" />
        </a>
      </div>

      {/* Chat Window */}
      {isChatOpen && (
        <div className="chat-window">
          <div className="chat-body">
            <Chat />
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatWidget;
