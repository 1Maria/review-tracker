import React from 'react';
import { Box, Typography, makeStyles } from '@material-ui/core';
import StarIcon from '@material-ui/icons/Star';

const useStyles = makeStyles((theme) => ({
    review: {
        backgroundColor: theme.palette.primary.white,
        minHeight: '15.625rem',
        margin: '2.5rem 7.5rem',
        paddingLeft: '1.25rem', 
        paddingRight: '1.25rem',
    },
    place: {
        color: theme.palette.secondary.main,
        paddingTop: '1.25rem',
        paddingBottom: '0.3125rem',
    }, 
    content: {
        color: theme.palette.secondary.darkGray,
        paddingTop: '1.5625rem',
        paddingBottom: '6.0625rem', 
    }, 
    author: {
        color: theme.palette.secondary.main, 
        paddingBottom: '1.5625rem',
    },
    date: {
        color: theme.palette.secondary.lightGray,
        paddingBottom: '1.5625rem',
    }
}));

const Review = ({review}) => {
    const classes = useStyles();
    return (
        <Box className={classes.review}>
            <Typography component="h2" variant="h2" className={classes.place}>
                {review.place}
            </Typography>
            <StarIcon style={{fill: '#FBCD33'}}/>
            <Typography component="h3" variant="h3" className={classes.content}>
                {review.content}
            </Typography>
            <Typography component="h4" variant="h4" className={classes.author}>
                {review.author}
            </Typography>
            <Typography component="h4" variant="h4" className={classes.date}>
                {review.published_at}
            </Typography>
        </Box>
    );
}

export default Review;

