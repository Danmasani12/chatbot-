import React from 'react';
import headerImage from '../assets/img/header.png';
import minimizeImage from '../assets/img/minimize.png';
import closeImage from '../assets/img/close.png';
function Header() {
  return (
    <div className="chat-title">
      <h1>Port Assist</h1>
      <figure className="avatar">
        <img src={headerImage} alt="Header" />
      </figure>
      <div className="r-nav">
        <ul>
          <li>
            <a id="minimize">
              <img src={minimizeImage} width="26px" alt="Minimize" />
            </a>
            <a id="close">
              <img src={closeImage} width="26px" alt="Close" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
