import React from 'react';
import { render } from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import './App.css'



class BandForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: [],
      instrument: [],
      yearsPlayed: []
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    
  }

  handleSubmit(event) {
    this.setState({
      name: event.target.name,
      instrument: event.target.instrument,
      yearsPlayed: event.target.yearsPlayed
    });
  }

  render() {
    return (
      <div className='AppStyling'>
        <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
          <AppBar title='Make A Band!' />
          <form className='FormStyling' onSubmit={this.handleSubmit}><br />
            <label>
              Name:
              <input type="text" value={this.state.name} />
            </label><br />
            <input type="submit" value="Submit" /><br />
            <label>
              Instrument:
              <input type="text" value={this.state.instrument} />
            </label><br />
            <input type="submit" value="Submit" /><br />
            <label>
              Years Played:
              <input type="text" value={this.state.yearsPlayed} />
            </label><br />
            <input type="submit" value="Submit" />
          </form>
          <div>
            <h3>Name: {this.state.name}</h3>
            <h3>Instrument: {this.state.instrument}</h3>
            <h3>Years Played: {this.state.yearsPlayed}</h3>
          </div>
        </MuiThemeProvider>
      </div>
    );
  }

}

export default BandForm;
