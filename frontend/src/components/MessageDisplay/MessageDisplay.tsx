import React from 'react';
import { Box, Typography } from '@mui/material';
import { useMessageDisplayStyle } from './MessageDisplay.styles';
import { IMessage } from '../../types';
import classNames from 'classnames';

const MessageDisplay = ({ messages, myId }: { messages: IMessage[]; myId: string | null }) => {
  const classes = useMessageDisplayStyle();
  return (
    <>
      {messages.length > 0 ? (
        messages.map((m, index) => (
          <Box key={`${m.id}${index}`} className={classes.wrapper}>
            <Typography variant="body1" className={classNames([classes.message, m.id === myId && classes.myMessage])}>
              {m.message}
            </Typography>
          </Box>
        ))
      ) : (
        <Typography variant="body1">No messsages yet</Typography>
      )}
    </>
  );
};

export default MessageDisplay;
