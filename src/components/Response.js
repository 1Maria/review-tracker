import React, { useState } from 'react';
import { format } from 'date-fns'
import { makeStyles, Box, Typography } from '@material-ui/core';
import ReplyIcon from '@material-ui/icons/Reply';
import EditPopover from './EditPopover';
import ResponseForm from './ResponseForm';

const useStyles = makeStyles((theme) => ({
    response: {
        backgroundColor: theme.palette.primary.white,
        minHeight: '15.625rem',
        marginTop: '2.5rem', 
        marginBottom: '2.5rem',
        position: 'relative',
    },
    topLine: {
        display: 'flex', 
        justifyContent: 'space-between',
        gap: '2.25rem',
        width: '100%',
    },
    content: {
        color: theme.palette.secondary.darkGray,
        height: '8.25rem',
    }, 
    author: {
        color: theme.palette.secondary.main, 
        paddingBottom: '2.25rem',
    },
    date: {
        color: theme.palette.secondary.lightGray,
        paddingBottom: '2.25rem',
    }, 
    bottomLine: {
        display: 'flex', 
        justifyContent: 'flex-start',
        gap: '1.75rem',
        position: 'absolute', 
        bottom: 0,
        paddingLeft: '5rem',
    },
}));

const Response = ({ response, id, onUpdate }) => {
    const classes = useStyles();

    const [showForm, setShowForm] = useState(false);
    const onSubmit = () => {
        setShowForm(false);
        onUpdate();
    }

    return (
        <Box className={classes.response}>
            <Box className={classes.topLine} pt="2.25rem" px="1.25rem">
                <Box className={classes.topLine}>
                    <ReplyIcon style={{fill: '#097AE6'}}/>
                    {
                        showForm || !response
                        ? <ResponseForm id={id} defaultContent={response?.content || ''} defaultAuthor={response?.author || ''} onSubmit={onSubmit} /> 
                        : 
                        <Typography component="h3" variant="h3" className={classes.content}>
                            { response.content }
                        </Typography>
                    }
                </Box>
                <EditPopover onClick={() => {setShowForm(true)}}/>
            </Box>
            { 
                (!showForm && response) &&
                <Box className={classes.bottomLine}>
                    <Typography component="h4" variant="h4" className={classes.author}>
                        { response.author }
                    </Typography>
                    <Typography component="h4" variant="h4" className={classes.date}>
                        {format(new Date(response.published_at), 'MM/dd/yyyy')}
                    </Typography>
                </Box>
            }
        </Box>
    );
}

export default Response;