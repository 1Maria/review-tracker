import React from 'react';
import { Box, Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    header: {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.white,
        height: '3.75rem',
        width: '100%',
        padding: '1rem',
        [theme.breakpoints.up('xs')]: {
            paddingLeft: '3rem', 
            paddingRight: '3rem',
        },
        [theme.breakpoints.up('sm')]: {
            paddingLeft: '2rem', 
            paddingRight: '2rem',
        },
        [theme.breakpoints.up('md')]: {
            paddingLeft: '8rem', 
            paddingRight: '8rem',
        },
        [theme.breakpoints.up('lg')]: {
            paddingLeft: '6rem', 
            paddingRight: '6rem',
        },
        [theme.breakpoints.only('xl')]: {
            paddingLeft: '20rem', 
            paddingRight: '20rem',
        },
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