import { blue } from '@mui/material/colors';
import { makeStyles } from '@mui/styles';

export const useMessageDisplayStyle = makeStyles(
  () => ({
    wrapper: {
      width: '100%',
    },
    message: {
      background: 'lightblue',
      width: '200px',
      borderRadius: '4px',
      padding: '5px',
      boxSizing: 'border-box',
      textAlign: 'left',
      margin: '2px 0',
      marginLeft: '-4px',
    },
    myMessage: {
      background: 'lightpink',
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
