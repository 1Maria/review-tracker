import { red } from '@material-ui/core/colors';
import { createTheme } from '@material-ui/core/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#0057B3',
        }, 
        secondary: { 
            main: '#FBFCFD',
        },
        error: {
            main: red.A400,
        }, 
        background: {
            default: '#8D95A3',
        },
    },
});

export default theme;