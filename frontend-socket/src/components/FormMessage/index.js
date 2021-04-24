import React from 'react';

function FormMessage() {
  return (
    <>
      <form class="msger-inputarea">
        <input type="text" class="msger-input" placeholder="Enter your message..." />
        <button type="submit" class="msger-send-btn">
          Send
        </button>
      </form>
    </>
  );
}

export default FormMessage;
