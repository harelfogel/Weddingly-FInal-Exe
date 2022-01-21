import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ThemeProvider } from '@mui/system';
import customTheme from './Utils/Style/customTheme'

ReactDOM.render(
  <React.StrictMode>
  <ThemeProvider theme={customTheme}>
    <App />
  </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
