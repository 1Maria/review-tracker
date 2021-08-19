import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@material-ui/core';
import Review from './Review';
import Response from './Response';

const ShowReview = () => {
    const { id } = useParams();

    const [review, setReview] = useState();
    useEffect(() => {
        fetch(`http://localhost:3020/reviews/${id}`)
        .then(res => res.json())
        .then(json => setReview(json))
    }, [id]);

    return (
        <Box>
            { review && <Review review={review} isSmall={false} /> }
            { review && review.response && <Response response={review.response} /> }
        </Box>
    );
}

export default ShowReview;