import React, { useState } from 'react';
import ChatWindow from './components/ChatWindow';
import './App.css';

const App = () => {
  const [sessionId, setSessionId] = useState('12345'); // We can generate a unique session ID for each user.

  return (
    <div className="App">
      <h1>SuperCar Virtual Assistant</h1>
      <ChatWindow sessionId={sessionId} />
    </div>
  );
};

export default App;
