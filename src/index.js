import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ThemeProvider } from '@mui/system';
import customTheme from './Utils/Style/customTheme'
import 'react-toastify/dist/ReactToastify.min.css';
import { ToastContainer } from 'react-toastify';

ReactDOM.render(
  <React.StrictMode>
  <ThemeProvider theme={customTheme}>
    <App />
  </ThemeProvider>
  <ToastContainer />
  </React.StrictMode>,
  document.getElementById('root')
);
