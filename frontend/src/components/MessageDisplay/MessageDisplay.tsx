import React from 'react';
import { Box, Typography } from '@mui/material';

const MessageDisplay = ({ messages }) => {
  return (
    <>
      {messages.length > 0 ? (
        messages.map((m, index) => (
          <Box key={`${m}${index}`}>
            <Typography variant="body1">{m}</Typography>
          </Box>
        ))
      ) : (
        <Typography variant="body1">No messsages yet</Typography>
      )}
    </>
  );
};

export default MessageDisplay;
