import React from 'react';
import '../assets/css/style.css';
import micOverlay from '../assets/img/voice-image.webp'; // Replace with your image path

const VoiceOverlay = ({ isActive }) => {
  return (
    <div className={`voice-overlay-container ${isActive ? 'active' : ''}`}>
      <div className="voice-overlay">
        <img
          src={micOverlay}
          alt="Voice Chat Animation"
          className="voice-overlay-image"
        />
      </div>
    </div>
  );
};

export default VoiceOverlay;
