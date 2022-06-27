import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Grid, Typography } from '@mui/material';
import MessageDisplay from '../components/MessageDisplay';
import { IMessage } from '../types';
import { v4 as uuidv4 } from 'uuid';
import { json } from 'stream/consumers';
import { keyboardImplementationWrapper } from '@testing-library/user-event/dist/keyboard';

const URL = process.env.REACT_APP_URL as string;

const Chat = ({ myId }: { myId: any }) => {
  const ws = new WebSocket(URL);
  const [message, setMessage] = useState<string>();
  const [messages, setMessages] = useState<any>([]);

  const handleChange = (event) => {
    const { value } = event.target;
    setMessage(value);
  };

  const handleClick = () => {
    const msg = { id: myId, message: message };
    ws.send(JSON.stringify(msg));
    setMessage('');
  };

  // socket.io użyć
  // pomaga zamiana formatów

  // reconnection mechanizm dodać
  // przycisk leave
  // zrobic kanaly do ktorych mozna doloaczy - Socket.io
  // popiąc mongo db ( mongo DB z dockerem) - zeby były wiadomosci
  // pozniej zkonteneryzowac BE i FE
  // redux podłaczyc (redux toolkit czyli robic nowsza wersja)
  // themeing MUI

  // https://redux-toolkit.js.org/

  // dodac do porjektu github adniewia@gmail.com
  // ustawic pipeline w github z testami
  // mechanizm logowania do aplikacji, kontem googlowym i wyciagnac dane uzytkownika, avatar itp ~~~google oauth chyba?
  // zapraszanie do znajomych funkcjonalnosc (networking)
  // jakis formularz, np do logowania, albo ustawienia konta, "useFieldArray", form context 

  useEffect(() => {
    ws.onmessage = async (e) => {
      const upload = await e.data.text()
      const { id, message } = JSON.parse(upload)

      const newMessage = { id, message };
      setMessages((messages) => [newMessage, ...messages]);
    };
  }, [ws.onmessage]);

  return (
    <Grid container direction="column" alignItems="center">
      <Grid item>
        <MessageDisplay messages={messages} myId={myId} />
      </Grid>
      <Grid item>
        <Box
          component="form"
          sx={{
            '& .MuiTextField-root': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="outlined-textarea"
            label=""
            placeholder="Enter yout message"
            multiline
            value={message}
            onChange={handleChange}
          />
        </Box>
        <Button variant="contained" onClick={handleClick} sx={{ margin: '8px' }}>
          Send it
        </Button>
      </Grid>
    </Grid>
  );
};

export default Chat;
