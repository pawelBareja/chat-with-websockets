import React, { useState } from 'react';
import Login from './pages/Login';
import Chat from './pages/Chat';
import { useSelector, useDispatch } from 'react-redux'
import type { RootState } from './store/store'
import { setLoginId } from './features/login'

const App = () => {
  const dispatch = useDispatch()
  const loginId = useSelector((state: RootState) => state.login.id)
  const [userName, setUserName] = useState<string>('');


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    console.log(value);
    setUserName(value);
  };

  return (
    <>
      {loginId ? (
        <Chat myId={loginId} />
      ) : (
        <Login handleChange={handleChange} handleClick={() => dispatch(setLoginId(userName))} userName={userName} />
      )}
    </>
  );
};

export default App;
