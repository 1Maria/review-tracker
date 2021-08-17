import React from 'react';
import { Box, Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    header: {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.white,
        height: '3.75rem',
        width: '100%',
        padding: '1rem 7.5rem'
    },
}));

const Header = () => {
    const classes = useStyles();
    return (
        <Box className={classes.header}>
            <Typography component="h1" variant="h2">
                Reviews
            </Typography>
        </Box>
    );
}

export default Header;