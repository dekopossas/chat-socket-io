import React, { useEffect, useState } from 'react';

import FormMessage from '../../components/FormMessage';
import MessageBox from '../../components/MessageBox';

import './styles.css'

import socket from '../../utils/socketClient';

function Chat() {
  // const messages = [
  //   { isMine:true, user:'Renato', sendAt:'11:00', message:'oi' },
  //   { isMine:false, user:'Coruja', sendAt:'11:01', message:'cole!' },
  //   { isMine:true, user:'Renato', sendAt:'11:02', message:'Passa a grana!' },
  // ]

  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket.on('chat.receiveMessage', (data) => {
      setMessages([ ...messages, data ])
    })
  }, [messages])

  return (
    <section class="msger">
      <header class="msger-header">
        <div class="msger-header-title">
          <i class="fas fa-comment-alt"></i> SimpleChat
        </div>
        <div class="msger-header-options">
          <span>
            <i class="fas fa-cog"></i>
          </span>
        </div>
      </header>

      <main class="msger-chat">
        {messages.map(({ username:user, message, sendAt }) => (
          <MessageBox
            isMine={user === localStorage.getItem('username')}
            user={user}
            sendAt={sendAt}
            message={message}
          />
        ))}
      </main>
      <FormMessage />
    </section>
  );
}

export default Chat;
