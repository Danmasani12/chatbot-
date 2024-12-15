import React, { useState, useEffect } from 'react';
import SlideShow from './SlideShow';
import IconList from './IconList';
import '../assets/css/style.css';


function Messages() {
  const [currentDateTime, setCurrentDateTime] = useState('');

  useEffect(() => {
    // Function to fetch the current time with time zone
    const getDateTime = () => {
      const now = new Date();
      const formattedDateTime = now.toLocaleString('en-US', {
        timeZoneName: 'short', // Displays the short time zone name
      });
      setCurrentDateTime(formattedDateTime);
    };

    getDateTime(); // Initialize immediately
    const interval = setInterval(getDateTime, 1000); // Update every second

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className="messages">
      <div className="messages-content">
        {/* Time zone display */}
        <div className="timeZone">
          <p className="marquee-text" id="marqueedata">
            {currentDateTime} {/* Display the dynamic date and time */}
          </p>
        </div>
        {/* SlideShow Component */}
        <SlideShow />
        <div className="charsection">
          Hi there! 👋
        </div>
        <div className="charsection">
          <p className="chat-text">
            I am a VPA Virtual Assistant. I am here to help you..<br />
          </p>
        </div>
        {/* IconList Component */}
        <IconList />
      </div>
    </div>
  );
}

export default Messages;
