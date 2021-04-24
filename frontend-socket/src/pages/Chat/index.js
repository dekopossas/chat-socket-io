import React from 'react';

import MessageBox from '../../components/MessageBox';

import './styles.css'

function Chat() {
  const messages = [
    { isMine:true, user:'Renato', sendAt:'11:00', message:'oi' },
    { isMine:false, user:'Coruja', sendAt:'11:01', message:'cole!' },
    { isMine:true, user:'Renato', sendAt:'11:02', message:'Passa a grana!' },
  ]

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
        {messages.map(({ user, message, sendAt, isMine }) => (
          <MessageBox isMine={isMine} user={user} sendAt={sendAt} message={message} />
        ))}
      </main>

      <form class="msger-inputarea">
        <input type="text" class="msger-input" placeholder="Enter your message..." />
        <button type="submit" class="msger-send-btn">
          Send
        </button>
      </form>
    </section>
  );
}

export default Chat;
