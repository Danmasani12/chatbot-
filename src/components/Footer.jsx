import React, { useState } from 'react';
import '../assets/css/style.css';
import microphoneIcon from '../assets/img/voice-image.webp';

function Footer({ startVoiceChat, isListening, onSendMessage }) {
  const [message, setMessage] = useState('');

  const handleInputChange = (e) => {
    setMessage(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && message.trim()) {
      console.log("Message sent:", message); // Debugging line
      if (onSendMessage) {
        onSendMessage(message); // Call the parent function to send message
      }
      setMessage(''); // Clear input after sending
    }
  };

  return (
    <div className="footer-container">
      <div className="footer">
        <div className="msg-input-container">
          <input
            id="msg-input"
            className="msg-input"
            placeholder="How may I help you?"
            type="text"
            value={message}
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
            maxLength="100"
            autoComplete="off"
            autoFocus
          />
        </div>
        <div className="voice-chat">
          <button
            className={`voice-btn ${isListening ? 'active' : ''}`}
            onClick={startVoiceChat}
            title={isListening ? 'Stop Listening' : 'Start Voice Chat'}
          >
            <img
              src={microphoneIcon}
              alt="Voice Chat"
              style={{ width: '24px', height: '24px' }}
            />
          </button>
        </div>
        <div className="lang-selector">
          <button className="btn selected">EN</button>
        </div>
      </div>
    </div>
  );
}

export default Footer;
