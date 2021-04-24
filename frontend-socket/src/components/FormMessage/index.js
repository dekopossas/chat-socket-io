import React, { useState } from 'react';

function FormMessage() {
  const [mensage, setMessage] = useState('');

  const handleSend = (event) => {
    console.log(message);
  }

  return (
    <>
      <form class="msger-inputarea">
        <input
          type="text"
          class="msger-input"
          placeholder="Digite uma mensagem..."
          onChange={(event) => handleSend(event.target.value)}
        />
        <button
          type="submit"
          class="msger-send-btn"
          onClick={handleSend}
        >
          Enviar
        </button>
      </form>
    </>
  );
}

export default FormMessage;
