import React, { useState, useEffect } from 'react';
import Chat from './Chat';
import './App.css';
import LoginPage from './LoginPage';

function App(props) {

  useEffect(() => {
    props.firebase.database().ref('chatLog').on('value', snapshot => {
      let items = snapshot.val();
      if (items) {
        items = Object.values(items);
      } else {
        items = [];
      }
      setChatLog(items);
    })
  }, [props.firebase])

  const onLogin = function(evt) {
    setUsername(evt.target.value);
    setAppState('chat');
    console.log(evt.target.value)
  }
  
  const [username, setUsername] = useState('Roger');
  const [messageInput, setMessageInput] = useState('');
  const [chatLog, setChatLog] = useState([]);
  const [appState, setAppState] = useState('login');
  
  const onChange = (evt) => setMessageInput(evt.target.value);
  
  const onSubmit = function(evt) {
    evt.preventDefault();
    if (messageInput.length === 0) return;
    let payload = {message: messageInput, username: username};
    props.firebase.database().ref('chatLog').push(payload);
    setMessageInput('');

  }
  
  return (
    <div className="chat-container">
      <LoginPage
        onLogin={onLogin}/>
      <Chat username={username}
          chatLog={chatLog}
          messageInput={messageInput}
          onChange={onChange}
          onSubmit={onSubmit} />

    </div>
  );
}

export default App;
