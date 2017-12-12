import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import TextField from 'material-ui/TextField';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import {BrowserRouter as Router, Link, Match, Miss} from 'react-router-dom';

//would like to accept inputs of a name, the instrument they play, and how many years they've played it
//would like to print out the values a user as entered
//would like to classify by instrument

class OurBand extends Component {
    constructor(props) {
      super(props);

      this.state = {
      name: '',
      instrument: '',
      yearsPlayed: '',
    }
  };

    handleToggle = (e) => {
      e.preventDefault();
      this.setState({open: false});
    }

    handleClose = () => this.setState({open: false});

    handleChange = (e) => {
      e.preventDefault();
      this.setState({
        ...this.state,
        name: e.target.name,
        instrument : e.target.instrument,
        yearsPlayed: e.target.yearsPlayed
      });
    };

    // const home = () => {
    //
    // };
    //
    // const setup = () => {
    //
    // };
    //
    // const hearBands = () => {
    //
    // };

  render() {
    return (
      <div className="App">
        <MuiThemeProvider>
        <AppBar
          title="Let's Make a Band!!"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
        />
        <RaisedButton label='Open Drawer' onClick={this.handleToggle} />
        <Drawer ref='Drawer' docked='false'
          home={this.home}
          instrument={this.instrument}
          yearsPlayed={this.yearsPlayed}
          open={this.state.open}
          onRequestChange={open => this.setState({open})}
        >
        <MenuItem onClick={this.handleClose}>Home</MenuItem>
        <MenuItem onClick={this.handleClose}>Setup</MenuItem>
        <MenuItem onClick={this.handleClose}>Hear Some Bands!</MenuItem>
        </Drawer>
      <TextField
        id='text-field'
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
        id='text-field'
        value={this.state.yearsPlayed}
        floatingLabelText="How long have you played it?"
        onChange={this.handleChange}
      />
      </MuiThemeProvider>
      </div>
    );
  }
}

export default OurBand;
