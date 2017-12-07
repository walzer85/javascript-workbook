import React, { Component } from 'react';

import {BrowserRouter as Router, Link, Match, Miss} from 'react-router';

//would like to accept inputs of a name, the instrument they play, and how many years they've played it
//would like to print out the values a user as entered
//would like to classify by instrument

const App = () => {
  render() {
  return (
    <Router>
    <div>
      <ul>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/setup">Ensemble Setups</Link></li>
        <li><Link to="/hearbands">Hear Some Bands</Link></li>
      </ul>
    </div>
  );
  }
}

export default App;
