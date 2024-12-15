import React from 'react';
import Header from './Header';
import Transparency from './Transparency';
import Messages from './Messages';
import Footer from './Footer';
import FloatingActionButton from './FloatingActionButton';
import '../assets/css/style.css';
function Chat() {
  return (
    <div className="chat">
      <Header />
      <Transparency />
      <Messages />
      <Footer />
      <FloatingActionButton />
    </div>
  );
}

export default Chat;
