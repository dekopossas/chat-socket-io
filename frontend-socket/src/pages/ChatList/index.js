import axios from 'axios';
import React, { useEffect, useState } from 'react';

function ChatList() {
  const [ users, setUsers ] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/users').then((response) => {
      const currentUser = localStorage.getItem('currentUser');
      const availableUsers = response.data.filter(({ username }) => username !== currentUser);
      setUsers(availableUsers);
    });
  }, []);
    
    return (
    <div>
      <h1>Lista de Usuarios</h1>

      <ul>
        {users && users.map(({ username }) => (
          <li>
            <a href={`/chat/${username}`}>
              {username}
            </a>
          </li>
          ))}
      </ul>
    </div>
  )
}
  
export default ChatList;
