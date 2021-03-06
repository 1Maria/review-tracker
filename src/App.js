import React from 'react';
import { Switch, Route, useLocation } from "react-router-dom";
import { Box, makeStyles } from '@material-ui/core';
import clsx from 'clsx';
import Header from './components/Header';
import ShowReview from './components/ShowReview';
import Reviews from './components/Reviews';

const useStyles = makeStyles((theme) => ({
  reviews: {
    [theme.breakpoints.up('xs')]: {
        paddingLeft: '3rem', 
        paddingRight: '3rem',
        height: '100%',
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
    [theme.breakpoints.up('xl')]: {
        paddingLeft: '20rem', 
        paddingRight: '20rem',
    },
  }, 
  reviewsIndex: {
    [theme.breakpoints.only('md')]: {
      paddingLeft: '5rem', 
      paddingRight: '5rem',
    }, 
    [theme.breakpoints.up('xl')]: {
      paddingLeft: '17rem', 
      paddingRight: '17rem',
    }
  }, 
}));

const App = () => {
  const classes = useStyles();
  const location = useLocation();
  const isIndexPage = location.pathname === '/';

  console.log(location.pathname)

  return (
      <Box px={0}>
        <Header />
        <Box className={clsx(classes.reviews, isIndexPage && classes.reviewsIndex)}> 
          <Switch>
            <Route path="/review/:id">
              <ShowReview />
            </Route>
            <Route path="/">
              <Reviews />
            </Route>
          </Switch>
        </Box>
      </Box>
  );
};

export default App;
