import React, { Component } from 'react';
import './App.css';
import PlayerCard from './playercard.js';
import './App.css'

//This is the home display.  Displays the input card and a submit button
class BandForm extends Component {
  render() {
    return (
      <div className="AppStyling">
        <div className="columns">
          <div className="col-md-9 centered">
            <h3>Wanna Make a Band!?!?</h3>
            <PlayerCard />
          </div>
        </div>
      </div>
    );
  }
}

export default BandForm;
