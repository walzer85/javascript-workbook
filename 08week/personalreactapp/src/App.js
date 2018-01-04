import React, { Component } from 'react';
import '../node_modules/spectre.css/dist/spectre.min.css';
import './styles.css';
import PlayerCard from './playercard.js';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="columns">
          <div className="col-md-9 centered">
            <h3>React.js Controlled Form Components</h3>
            <Playercard />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
