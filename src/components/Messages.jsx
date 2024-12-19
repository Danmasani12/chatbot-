import React, { useState, useEffect } from 'react';
import SlideShow from './SlideShow';
import IconList from './IconList';
import Footer from './Footer';
import '../assets/css/style.css';

function Messages() {
  const [messages, setMessages] = useState([]);
  const [currentDateTime, setCurrentDateTime] = useState('');
  const [isBotTyping, setIsBotTyping] = useState(false);

  useEffect(() => {
    const getDateTime = () => {
      const now = new Date();
      const formattedDateTime = now.toLocaleString('en-US', {
        timeZoneName: 'short',
      });
      setCurrentDateTime(formattedDateTime);
    };

    getDateTime();
    const interval = setInterval(getDateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleSendMessage = async (message) => {
    if (!message.trim()) return; // Prevent sending empty messages
    
    const userMessage = { sender: 'user', text: message };
    console.log("User message:", userMessage); // Debugging line

    // Update the state with the user's message immediately
    setMessages((prevMessages) => [...prevMessages, userMessage]);

    // Simulate bot typing response
    setIsBotTyping(true);

    // Simulate delay in bot response
    setTimeout(() => {
      const botReply = {
        sender: 'bot',
        text: `You said: "${message}". How can I assist further?`,
      };

      console.log("Bot reply:", botReply); // Debugging line
      setMessages((prevMessages) => [...prevMessages, botReply]);
      setIsBotTyping(false); // Stop typing indicator
    }, 1500); // Simulate a 1.5-second delay
  };

  return (
    <div className="messages">
      <div className="messages-content">
        <div className="timeZone">
          <p className="marquee-text" id="marqueedata">
            {currentDateTime}
          </p>
        </div>
        <SlideShow />
        <IconList />
        <div className="chat-section">
          {/* Render messages */}
          {messages.length === 0 ? (
            <div className="chat-message bot-message">Start chatting...</div>
          ) : (
            messages.map((msg, index) => (
              <div
                key={index}
                className={`chat-message ${msg.sender === 'user' ? 'user-message' : 'bot-message'}`}
              >
                {msg.text}
              </div>
            ))
          )}

          {/* Typing indicator */}
          {isBotTyping && (
            <div className="chat-message bot-message">
              <i>Bot is typing...</i>
            </div>
          )}
        </div>
      </div>
      <Footer onSendMessage={handleSendMessage} />
    </div>
  );
}

export default Messages;
