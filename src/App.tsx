import './App.css';
import React from 'react';
import Footer from '../src/Components/footer/Footer';
import Header from '../src/Components/header/Header';
import Dashboard from '../src/Components/dashboard/Dashboard';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    header: {
      backgroundColor: '#f2f2f2'
    },
  }));

function App() {
  const classes = useStyles();
  return (
    <div className={classes.header}>
      <Header/>
      <Dashboard/>
      <Footer/>
    </div>
  );
}

export default App;