import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';

//would like to accept inputs of a name, the instrument they play, and how many years they've played it
//would like to print out the values a user as entered
//would like to classify by instrument

class Personal extends Component {
  state = {
    name: '',
    instrument: '',
    yearsPlayed: '',
  }

  handleChange(e) {
    this.setState({
      value: e.target.value,
    });
  };

  /* add several text input fields to gather the values for name, instrument, and years played */

  render() {
    return (
      <div className="App">
        <MuiThemeProvider>
        <TextField
        value={this.state.name}
        floatingLabelText="What is your name?"
        onChange={this.handleChange}
      />
      <TextField
          value={this.state.instrument}
          floatingLabelText="What instrument do you play?"
          onChange={this.handleChange}
      />
      <TextField
        value={this.state.yearsPlayed}
        floatingLabelText="How long have you played it?"
        onChange={this.handleChange}
      />
      </MuiThemeProvider>
      </div>
    );
  }
}

export default Personal;
