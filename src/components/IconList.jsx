import React from 'react';
import '../assets/css/style.css';

// Import images
import tradeImage from '../assets/img/trade.png';
import trafficImage from '../assets/img/Traffic.jpeg';
import stadiumImage from '../assets/img/stadium6.jpg';
import mandapamImage from '../assets/img/mandapam.png';
import cruiseImage from '../assets/img/cruise.jpg';

function IconList() {
  return (
    <div className="charsection">
      <p className="chat-text">
        <b>I can help you in Informations for</b>: <br />
        <div className="Icons_msg">
          {/* First row of icons */}
          <ul className="icon-list-burger img_btn" id="tradesIcons1">
            <li>
              <div className="icon-container-burger hv_img" id="tradesBtn">
                <img className="icon" src={tradeImage} alt="Trades" />
                <p style={{ fontSize: '1rem' }}>Trades</p>
              </div>
            </li>
            <li>
              <div
                className="icon-container-burger hv_img"
                id="Btn3"
                onClick={() => insertMessage('Traffic Info')}
              >
                <img className="icon" src={trafficImage} alt="Traffic Info" />
                <p>Traffic Info</p>
              </div>
            </li>
          </ul>

          {/* Second row of icons */}
          <ul className="icon-list-burger img_btn" id="tradesIcons2">
            <li>
              <div
                className="icon-container-burger hv_img"
                id="Btn4"
                onClick={() => insertMessage('Stadium')}
              >
                <img className="icon" src={stadiumImage} alt="Stadium Info" />
                <p>Stadium Info</p>
              </div>
            </li>
            <li>
              <div
                className="icon-container-burger hv_img"
                id="Btn5"
                onClick={() => insertMessage('Kalyana Mandapam')}
              >
                <img
                  className="icon"
                  src={mandapamImage}
                  alt="Kalyana Mandapam"
                />
                <p>Kalyana Mandapam</p>
              </div>
            </li>
          </ul>

          {/* Third row of icons */}
          <ul className="icon-list-burger img_btn" id="tradesIcons3">
            <li>
              <div
                className="icon-container-burger hv_img"
                id="Btn6"
                onClick={() => insertMessage('Cruise')}
              >
                <img className="icon" src={cruiseImage} alt="Cruise Info" />
                <p>Cruise Info</p>
              </div>
            </li>
          </ul>
        </div>
      </p>
    </div>
  );
}

// Mock function for demonstration purposes
function insertMessage(message) {
  alert(`You clicked: ${message}`);
}

export default IconList;
