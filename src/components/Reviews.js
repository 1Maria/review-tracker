import React from 'react';
import { Box, Grid, makeStyles, useTheme, useMediaQuery } from '@material-ui/core';
import Review from './Review';

const reviews = require('../reviews.json');

const useStyles = makeStyles((theme) => ({
    reviews: {
        [theme.breakpoints.down('xs')]: {
            justifyContent: "center",
        },
        [theme.breakpoints.up('sm')]: {
            justifyContent: "space-evenly",
        },
        [theme.breakpoints.up('md')]: {
            justifyContent: "space-around",
        },
        [theme.breakpoints.up('lg')]: {
            justifyContent: "space-between",
        },
    },
}));

const Reviews = () => {
    const classes = useStyles();
    const theme = useTheme();
    const isLg = useMediaQuery(theme.breakpoints.up('lg'));

    return (
        <Box>
            <Grid container spacing={isLg ? 10 : 1} alignItems="center" className={classes.reviews}>
                {reviews.reviews.map(review => 
                    <Grid alignItems="center" justifyContent="space-around" key={review.id} container item xs={12} sm={6} lg={4} spacing={1}>
                        <Review review={review} isSmall={true} />
                    </Grid>
                )}
            </Grid>
        </Box>
    );
}

export default Reviews;