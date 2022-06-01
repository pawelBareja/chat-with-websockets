import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Grid, Typography } from '@mui/material';
import MessageDisplay from './components/MessageDisplay';

const URL: any = process.env.REACT_APP_URL;

const App = () => {
  const ws = new WebSocket(URL);

  const [message, setMessage] = useState<any>('');
  const [messages, setMessages] = useState<any>([]);

  const handleChange = (event) => {
    const { value } = event.target;
    setMessage(value);
  };

  const handleClick = () => {
    ws.send(message);
    setMessage('');
  };

  useEffect(() => {
    ws.onmessage = (evt) => {
      evt.data.text().then((res) => setMessages((messages) => [...messages, res]));
    };
  }, []);

  return (
    <Grid container direction="column" alignItems="center">
      <Grid item>
        <MessageDisplay messages={messages} />
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
        <Button variant="contained" onClick={handleClick}>
          Send it
        </Button>
      </Grid>
    </Grid>
  );
};

export default App;
