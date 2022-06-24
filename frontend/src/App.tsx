import React, { useState, useEffect } from 'react';
import Login from './pages/Login';
import Chat from './pages/Chat';

const App = () => {
  const [userName, setUserName] = useState<string>('');
  const [myId, setMyId] = useState<any>(undefined);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    console.log(value);
    setUserName(value);
  };

  const handleClick = () => {
    setMyId(userName);
  };

  return (
    <>
      {myId ? (
        <Chat myId={myId} />
      ) : (
        <Login handleChange={handleChange} handleClick={handleClick} userName={userName} />
      )}
    </>
  );
};

export default App;
