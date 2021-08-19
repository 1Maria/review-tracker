import React, { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@material-ui/core';
import Review from './Review';
import Response from './Response';

const ShowReview = () => {
    const { id } = useParams();

    const [review, setReview] = useState();
    const fetchReview = useCallback(() => {
        fetch(`http://localhost:3020/reviews/${id}`)
        .then(res => res.json())
        .then(json => setReview(json))
    }, [id]);

    useEffect(() => {
       fetchReview();
    }, [fetchReview]);

    return (
        <Box>
            { review && <Review review={review} isSmall={false} /> }
            { review && review.response && <Response id={id} response={review.response} onUpdate={fetchReview} /> }
        </Box>
    );
}

export default ShowReview;