import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import NavigationClose from 'material-ui/svg-icons/navigation/close';

//would like to accept inputs of a name, the instrument they play, and how many years they've played it
//would like to print out the values a user as entered
//would like to classify by instrument

class Personal extends Component {
  constructor(props) {
    super(props);

      this.state = {
      name: '',
      instrument: '',
      yearsPlayed: '',
    }
  };

  handleChange = (e) => {
    this.setState({
      name: e.target.name,
      instrument : e.target.instrument,
      yearsPlayed: e.target.yearsPlayed
    });
  };

  /* add several text input fields to gather the values for name, instrument, and years played */

  render() {
    return (
      <div className="App">
        <MuiThemeProvider>
        <AppBar
          title="Let's Make a Band!!"
          iconClassNameRight="muidocs-icon-navigation-expand-more">
          <IconMenu
             iconButtonElement={
               <IconButton><MoreVertIcon /></IconButton>
             }
             targetOrigin={{horizontal: 'right', vertical: 'top'}}
             anchorOrigin={{horizontal: 'right', vertical: 'top'}}
           >
             <MenuItem primaryText="Refresh" />
             <MenuItem primaryText="Help" />
             <MenuItem primaryText="Sign out" />
           </IconMenu>
         </AppBar>
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
