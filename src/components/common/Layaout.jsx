import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Container, Grid } from '@material-ui/core';
import { Headers } from './Headers';

const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      height: '100vh',
      overflow: 'auto',
    },
    container: {
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(4),
    },
  }));

  const Layout = (props) => {
    const classes = useStyles();
  
    return (
      <div className={classes.root}>
        <CssBaseline />
        <Headers />
        <main className={classes.content}>
          <div className={classes.appBarSpacer} />
          
          <Container maxWidth="xl" className={classes.container}>
            
            <Grid container spacing={12}>
              
              {props.children}
            </Grid>
            
          </Container>
        </main>
      </div>
    );
  };
  
  export default Layout;