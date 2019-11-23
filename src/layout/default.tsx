import React from 'react';
import { NavBar } from '../components/NavBar';
import { Container, Fade, makeStyles, Paper } from '@material-ui/core';
import { Route, Switch } from "react-router";
import { BrowserRouter } from 'react-router-dom';
import { AllRoutes } from '../routes';


const useStyles = makeStyles(theme => ({
  container: {
    marginTop: theme.spacing(2),
    overflow: 'auto',
    height: '90vh',
    padding: theme.spacing(4),
    opacity: '95%',
  }
}))

const MainContent: React.FC = () => {
  const classes = useStyles();
  return (
    <Container maxWidth='lg'>
      <Paper className={classes.container} elevation={2}>
        <Fade in>
          <Switch>
            {AllRoutes}
          </Switch>
        </Fade>
      </Paper>
    </Container>
  )
}


export const DefaultLayout: React.FC = () => {

  return (
    <BrowserRouter>
      <NavBar />
      <MainContent />
    </BrowserRouter>
  )
}