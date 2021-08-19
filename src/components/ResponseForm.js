import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, TextField, Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    form: {
        display: 'flex', 
        flexDirection: 'column', 
        width: '100%',
    }, 
    bottomLine: {
        display: 'flex',
        flexDirection: 'row', 
        justifyContent: 'space-between',
        alignItems: 'flex-end',
    }
}));

const ResponseForm = ({ defaultContent='', defaultAuthor='', id, onSubmit }) => {
    const classes = useStyles();
    const [content, setContent] = useState(defaultContent);
    const [author, setAuthor] = useState(defaultAuthor);

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch(`http://localhost:3020/reviews/${id}`, {
            method: 'PATCH', 
            headers: {
                'Content-type': 'application/json'
            }, 
            body: JSON.stringify({
                response: {
                    content, 
                    author,
                    published_at: new Date().toString(),
                }
            }),
        }).then(() => {
            onSubmit();
        })
    }

    return (
        <Box className={classes.form}>
            <form className={classes.form} onSubmit={handleSubmit}>
                <TextField id="content" label="Content" multiline rows={4} value={content} required onChange={(e) => setContent(e.target.value)}></TextField>
                <Box className={classes.bottomLine}>
                    <TextField style={{width: '20rem'}} id="author" label="Author" value={author} required onChange={(e) => setAuthor(e.target.value)}></TextField>
                    <Button variant="contained" color="primary" type="submit">Submit</Button>
                </Box>
            </form>
        </Box>
    );
}

export default ResponseForm;