import React from 'react';
import logo from './logo.svg';
import './App.css';
import { DefaultLayout } from './layout/default';
import { CssBaseline } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import { theme } from './theme';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className='background-wallpaper'>
        <CssBaseline />
        <DefaultLayout />

      </div>
    </ThemeProvider>
  );
}

export default App;
