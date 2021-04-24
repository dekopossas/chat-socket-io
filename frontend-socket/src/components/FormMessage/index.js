import React, { useState } from 'react';
import socket from '../../utils/socketClient';

function FormMessage() {
  const [message, setMessage] = useState('');

  const handleSend = (event) => {
    event.preventDefault();
    socket.emit('chat.sendMessage', message);
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
