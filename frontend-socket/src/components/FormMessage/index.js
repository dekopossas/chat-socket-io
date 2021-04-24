import React from 'react';

function FormMessage() {
  return (
    <>
      <form class="msger-inputarea">
        <input type="text" class="msger-input" placeholder="Digite uma mensagem..." />
        <button type="submit" class="msger-send-btn">
          Enviar
        </button>
      </form>
    </>
  );
}

export default FormMessage;
