import React, { useState } from 'react';
import '../assets/css/style.css';

// Import image
import bannerImage from '../assets/img/banner2.png';

function Transparency() {
  const [isVisible, setIsVisible] = useState(true);

  const handleAgree = () => {
    setIsVisible(false); // Update state to remove the dialog and overlay
  };

  return (
    <>
      {isVisible && (
        <div className="transparency-overlay">
          <div className="dialog-box move">
            <div className="box-img">
              <img src={bannerImage} alt="Banner" className="move2" />
            </div>
            <h3>VPA Chatbot</h3>
            <p>(AI/ML & NLP powered Virtual Assistant for VPA)</p>
            <p>
              Agree to <a href="#">Terms & Conditions</a> and{' '}
              <a href="#">Privacy Policy</a>
            </p>
            <button id="terms" onClick={handleAgree}>
              I Agree
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Transparency;
