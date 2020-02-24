import React from 'react';
import './App.css';
import { DefaultLayout } from './layout/default';
import CssBaseline from '@material-ui/core/CssBaseline';
import ThemeProvider from '@material-ui/styles/ThemeProvider';
import { theme } from './theme';
import { BackgroundWallpaper } from './components/BackgroundWallpaper';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <BackgroundWallpaper />
      <div className='everything'>
        <CssBaseline />
        <DefaultLayout />
      </div>
    </ThemeProvider>
  );
}

export default App;
