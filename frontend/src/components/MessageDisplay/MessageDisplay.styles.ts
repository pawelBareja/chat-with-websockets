import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

export const useMessageDisplayStyle = makeStyles(
  (theme: Theme) => ({
    wrapper: {
      width: '100%',
    },
    message: {
      background: theme.palette.secondary.main,
      width: '200px',
      borderRadius: '4px',
      padding: '5px',
      boxSizing: 'border-box',
      textAlign: 'left',
      margin: '2px 0',
      marginLeft: '-4px',
    },
    myMessage: {
      background: theme.palette.accentColor.main,
      width: '200px',
      borderRadius: '4px',
      padding: '5px',
      boxSizing: 'border-box',
      textAlign: 'right',
      margin: '2px 0',
      marginLeft: '4px',
    },
  }),
  { name: 'displayer' }
);
