import React, { useState } from 'react';
import Header from './Header';
import Transparency from './Transparency';
import Messages from './Messages';
import Footer from './Footer';
import FloatingActionButton from './FloatingActionButton';
import '../assets/css/style.css';
import VoiceOverlay from './VoiceOverlay';

function Chat() {
  const [isListening, setIsListening] = useState(false);

  const startVoiceChat = () => {
    setIsListening((prevState) => !prevState);
    console.log(isListening ? 'Voice chat stopped.' : 'Voice chat started...');
  };

  return (
    <div className="chat">
      <Header />
      <Transparency />
      <Messages />
      <Footer startVoiceChat={startVoiceChat} isListening={isListening} />
      {/* VoiceOverlay below Footer */}
      <div className="voice-overlay-wrapper">
        <VoiceOverlay isActive={isListening} />
      </div>
      <FloatingActionButton />
    </div>
  );
}

export default Chat;
