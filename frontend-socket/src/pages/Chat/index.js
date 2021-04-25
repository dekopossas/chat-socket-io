import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

import FormMessage from '../../components/FormMessage';
import MessageBox from '../../components/MessageBox';

import './styles.css'

import socket from '../../utils/socketClient';

function Chat() {
  const { username } = useParams();

  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const from = localStorage.getItem('currentUser');
    const to = username;

    const key = [ from, to ].sort().join('-');

    socket.emit('connectRoom', key);

    socket.on('chat.receiveMessage', (data) => {
      setMessages([ ...messages, data ])
    })
  }, [messages])

  return (
    <section class="msger">
      <header class="msger-header">
        <div class="msger-header-title">
          <i class="fas fa-comment-alt"></i> {username}
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
      <FormMessage dest={username}/>
    </section>
  );
}

export default Chat;
