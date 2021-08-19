import React from 'react';
import { Link } from "react-router-dom";
import { format } from 'date-fns'
import { Box, Typography, makeStyles } from '@material-ui/core';
import clsx from 'clsx';
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import ForumIcon from '@material-ui/icons/Forum';
import theme from '../theme';

const useStyles = makeStyles((theme) => ({
    review: {
        backgroundColor: theme.palette.primary.white,
        minHeight: '15.625rem',
        // margin: '2.5rem 7.5rem',
        marginTop: '2.5rem', 
        marginBottom: '2.5rem',
        paddingLeft: '5rem', 
        paddingRight: '5rem',
        position: 'relative',
    },
    smallReview: {
        maxWidth: '18.75rem',
        maxHeight: '15.625rem',
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
        height: '8.25rem',
    }, 
    author: {
        color: theme.palette.secondary.main, 
        paddingBottom: '1.25rem',
    },
    date: {
        color: theme.palette.secondary.lightGray,
        paddingBottom: '1.25rem',
    }, 
    bottomLine: {
        display: 'flex', 
        justifyContent: 'space-between',
    },
    bottomLineLarge: {
        position: 'absolute', 
        bottom: 0,
    }, 
    reviewLink: {
        color: theme.palette.primary.main,
        textDecoration: 'none',
    },
}));

const Review = ({review, isSmall}) => {
    const classes = useStyles();

    let contentTruncation = review.content;
    if (isSmall && review.content.length > 80) {
        const substring = review.content.substring(0, 80);
        const closestSpace = substring.split('').findIndex((char) => char === ' ') + 80;
        contentTruncation = review.content.substring(0, closestSpace) + '...';
    }

    return (
        <Box className={clsx(classes.review, isSmall && classes.smallReview)}>
            <Typography component="h2" variant="h2" className={classes.place}>
                {review.place}
            </Typography>
            {new Array(review.rating).fill(0).map((_, idx) => <StarIcon key={idx} style={{fill: '#FBCD33'}}/>)}
            {new Array(5 - review.rating).fill(0).map((_, idx) => <StarBorderIcon key={idx} style={{fill: '#FBCD33'}}/>)}
            <Typography component="h3" variant="h3" className={classes.content}>
                {contentTruncation}
            </Typography>
            <Box className={clsx(classes.bottomLine, !isSmall && classes.bottomLineLarge)} >
                <Box className={classes.bottomLine} style={{gap: '1.75rem'}}>
                    <Typography component="h4" variant="h4" className={classes.author}>
                        {review.author}
                    </Typography>
                    <Typography component="h4" variant="h4" className={classes.date}>
                        {format(new Date(review.published_at), 'MM/dd/yyyy')}
                    </Typography>
                </Box>
                {isSmall &&  <Link className={classes.reviewLink} to={`/review/${review.id}`}><ForumIcon style={{fill: theme.palette.primary.main}} /></Link>}
            </Box>
        </Box>
    );
}

export default Review;

