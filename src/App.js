import React from 'react';
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { Box, makeStyles } from '@material-ui/core';
import Header from './components/Header';
import Review from './components/Review';
import Reviews from './components/Reviews';

const reviews = require('./reviews.json');

const useStyles = makeStyles((theme) => ({
  reviews: {
    [theme.breakpoints.up('xs')]: {
        paddingLeft: '3rem', 
        paddingRight: '3rem',
    },
    [theme.breakpoints.up('sm')]: {
        paddingLeft: '2rem', 
        paddingRight: '2rem',
    },
    [theme.breakpoints.up('md')]: {
        paddingLeft: '5rem', 
        paddingRight: '5rem',
    },
    [theme.breakpoints.up('lg')]: {
        paddingLeft: '6rem', 
        paddingRight: '6rem',
    },
    [theme.breakpoints.up('xl')]: {
        paddingLeft: '17rem', 
        paddingRight: '17rem',
    },
  }
}));

const App = () => {
  const classes = useStyles();

  return (
    <Router>
      <Box px={0}>
        <Header />
        <Box className={classes.reviews}>
          <Switch>
            <Route path="/review/:id">
              <Review review={reviews.reviews[1]} isSmall={false} />
            </Route>
            <Route path="/">
              <Reviews />
            </Route>
          </Switch>
        </Box>
      </Box>
    </Router>
  );
};

export default App;
