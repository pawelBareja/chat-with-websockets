import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Grid, Typography } from '@mui/material';

const Login = ({
  handleChange,
  handleClick,
  userName,
}: {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleClick: () => void;
  userName: string;
}) => {
  return (
    <Grid container direction="column" alignItems="center">
      <Grid item>
        <Typography variant="h2" component="h1">
          Login
        </Typography>
        <Typography variant="h3" component="h2">
          Enter your name
        </Typography>
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
            placeholder="Enter your name"
            value={userName}
            onChange={handleChange}
          />
        </Box>
        {userName && userName.length > 0 && (
          <Button variant="contained" onClick={handleClick}>
            accept
          </Button>
        )}
      </Grid>
    </Grid>
  );
};

export default Login;
