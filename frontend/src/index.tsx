import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { store } from './store/store'
import { Provider } from 'react-redux';
import { ThemeProvider } from '@mui/styles';
import { theme } from './style/theme'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);
