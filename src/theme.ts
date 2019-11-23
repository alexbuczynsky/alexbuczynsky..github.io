import { createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: '#00ccc8',
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      main: '#FFC914',
    },
    text: {
      primary: '#F4F2E1',
    },
    background: {
      default: '#ccd6db',
      paper: '#495359',
    },
    type: 'dark',
  },
});