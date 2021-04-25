import React, { useState } from 'react';
import socket from '../../utils/socketClient';

function FormMessage({ username }) {
  const [message, setMessage] = useState('');

  const handleSend = (event) => {
    event.preventDefault();
    const from = localStorage.getItem('username');
    const dest = username;
    socket.emit('chat.sendMessage', { message, from, dest });
  };

  return (
    <form onSubmit={handleSend}>
      <div class="msger-inputarea">
        <input
          type="text"
          class="msger-input"
          placeholder="Digite uma mensagem..."
          onChange={(event) => setMessage(event.target.value)}
        />
        <button type="submit" class="msger-send-btn">
          Enviar
        </button>
      </div>
    </form>
  );
}

export default FormMessage;
