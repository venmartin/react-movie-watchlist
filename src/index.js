import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme(
  {
    palette: {
      mode: 'dark',
      primary: {
        main: '#01ffc8',
        contrastText: '#272727',
      },
      secondary: {
        main: '#ff016d',
        contrastText: '#ffffff',
      },
      background: {
        default: '#000000',
        paper: '#272727',
      },
      text: {
        primary: '#ffffff',
        disabled: '#838383',
        hint: 'rgba(61,61,61,0.38)',
        secondary: '#b5b5b5',
      },
    }
  }
);

ReactDOM.render(
  <>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
