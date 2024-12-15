import React, { useState } from 'react';
import '../assets/css/style.css';

function Footer() {
  const [inputValue, setInputValue] = useState(''); // State to hold the input value

  const handleInputChange = (e) => {
    setInputValue(e.target.value); // Update state with input value
  };

  const languageButton = () => {
    console.log('Language button clicked');
    // Add your language selection logic here
  };

  return (
    <div className="footer-container">
      <div className="footer">
        {/* Input container */}
        <div className="msg-input-container">
          <input
            id="msg-input"
            className="msg-input"
            placeholder="How may I help you?"
            type="text"
            maxLength="100"
            autoComplete="off"
            value={inputValue} // Controlled value
            onChange={handleInputChange} // Handler for typing
            autoFocus
          />
          <div
            className="speech-to-text"
            style={{ display: 'flex', marginLeft: '0%' }}
          ></div>
        </div>

        {/* Language Selector */}
        <div className="lang-selector">
          <button className="btn selected" onClick={languageButton}>EN</button>
          <button className="btn" onClick={languageButton}>हिं</button>
          <button className="btn" onClick={languageButton}>TE</button>
        </div>
      </div>
    </div>
  );
}

export default Footer;
