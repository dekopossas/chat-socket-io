import React, { useState } from 'react';
import { useHistory } from 'react-router';

import axios from 'axios';

function Login() {
  const history = useHistory();
  const [username, setUsername] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    if(username.length === 0) return;

    await axios.post('http://localhost:3001/login', { username });
    localStorage.setItem('correntUser', username);
    history.push('/chats')
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
