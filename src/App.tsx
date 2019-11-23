import React from 'react';
import './App.css';
import { DefaultLayout } from './layout/default';
import { CssBaseline } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import { theme } from './theme';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className='background-wallpaper' />
      <div className='everything'>
        <CssBaseline />
        <DefaultLayout />
      </div>
    </ThemeProvider>
  );
}

export default App;
