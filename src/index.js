import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from "react-router-dom";
import { CssBaseline } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import App from './App';
import theme from './theme';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Router>
      <CssBaseline />
      <App />
    </Router>
  </ThemeProvider>,
  document.getElementById('root')
);
