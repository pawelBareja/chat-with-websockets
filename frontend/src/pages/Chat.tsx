import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Grid } from '@mui/material';
import MessageDisplay from '../components/MessageDisplay';
import { io } from "socket.io-client";


const URL = process.env.REACT_APP_URL as string
const socket = io(URL);

const Chat = ({ myId }: { myId: any }) => {

  const [message, setMessage] = useState<string>();
  const [messages, setMessages] = useState<any>([]);

  const handleChange = (event) => {
    const { value } = event.target;
    setMessage(value);
  };

  const handleClick = () => {
    const msg = { id: myId, message: message };
    setMessages((messages) => [...messages, msg]);
    socket.emit("send_message", msg);
    setMessage('');
  };


  useEffect(() => {
    socket.on("receive_message", (data) => {
      setMessages((messages) => [...messages, data]);
    });
  }, []);


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

