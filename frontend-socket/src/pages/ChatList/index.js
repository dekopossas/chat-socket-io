import axios from 'axios';
import React, { useEffect, useState } from 'react';

function ChatList() {
  const [ users, setUsers ] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/users').then((response) => {
      setUsers(response.data);
    });
  }, []);
    
    return (
    <div>
      <h1>Lista de Usuarios</h1>

      <ul>
        {users.map(({ username }) => (
          <li>{username}</li>
          ))}
      </ul>
    </div>
  )
}
  
export default ChatList;
