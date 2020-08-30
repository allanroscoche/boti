import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#3b9cd6',
    },
    secondary: {
      main: '#6ddf22',
    },
    error: {
      main: "#f5821f",
    },
    background: {
      default: '#ccc',
    },
  },
});

export default theme;