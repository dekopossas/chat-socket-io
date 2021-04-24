import React, { useState } from 'react';

function Login() {
  const [username, setUsername] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <div class="msger-inputarea">
        <input
          type="text"
          class="msger-input"
          placeholder="Digite seu nick..."
          onChange={(event) => setUsername(event.target.value)}
        />
        <button
          type="submit"
          class="msger-send-btn"
        >
          Logar
        </button>
      </div>
    </form>
  );
}

export default Login;
