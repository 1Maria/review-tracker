import { red } from '@material-ui/core/colors';
import { createTheme } from '@material-ui/core/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#0057B3',
            white: '#FBFCFD',
        }, 
        secondary: { 
            main: '#000000', 
            darkGray: '#5D6167', 
            lightGray: '#8D95A3',
            blue: '#097AE6',
        },
        error: {
            main: red.A400,
        }, 
        background: {
            default: '#8D95A3',
        },
    },
    typography: {
        fontFamily: [
            'Roboto', 
            'sans-serif'
        ].join(','), 
        h2: {
            fontSize: '1.5rem',
            fontWeight: 700, 
        },
        h3: {
            fontSize: '1.125rem', 
            fontWeight: 400,
        }, 
        h4: {
            fontSize: '0.875rem', 
            fontWeight: 400,
        }
    },
});

export default theme;