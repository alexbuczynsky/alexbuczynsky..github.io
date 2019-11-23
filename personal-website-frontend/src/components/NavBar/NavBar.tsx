import React from 'react';

import {
  makeStyles,
  AppBar,
  Toolbar,
  Typography,
  Link,
  Button,
} from '@material-ui/core';

import { Link as RouterLink } from 'react-router-dom';

import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedIn from '@material-ui/icons/LinkedIn';

const useStyles = makeStyles(theme => ({
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbar: {
    flexWrap: 'wrap',
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
  cardHeader: {
    backgroundColor: theme.palette.grey[200],
  },
  cardPricing: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'baseline',
    marginBottom: theme.spacing(2),
  },
  footer: {
    borderTop: `1px solid ${theme.palette.divider}`,
    marginTop: theme.spacing(8),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up('sm')]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
    },
  },
}));


export const NavBar: React.FC = () => {
  const classes = useStyles();
  return (
    <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
          Alexander Buczynsky
        </Typography>
        <nav>
          <Link component={RouterLink} variant="button" color="textPrimary" to='/' className={classes.link}>
            About
          </Link>
          <Link component={RouterLink} variant="button" color="textPrimary" to="/resume" className={classes.link}>
            Resume
          </Link>
          <Link component={RouterLink} variant="button" color="textPrimary" to="/projects" className={classes.link}>
            Projects
          </Link>
          <Link component={RouterLink} variant="button" color="textPrimary" to="/contact" className={classes.link}>
            Contact
          </Link>
        </nav>
        <Button href="https://www.linkedin.com/in/alexbuczynsky/" color="default" variant="outlined" className={classes.link}>
          <LinkedIn />
        </Button>
        <Button href="https://github.com/alexbuczynsky" color="primary" variant="outlined" className={classes.link}>
          <GitHubIcon />
        </Button>
      </Toolbar>
    </AppBar>
  )
}