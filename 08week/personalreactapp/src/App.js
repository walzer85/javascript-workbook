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

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
    // render() {
    //   return(
    //     <div>
    //       //this is where the card with the inputs displayed will go
    //     </div>
    //   )
    // }
  }

  render() {
    return (
      <div className='AppStyling'>
        <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
          <AppBar title='Make A Band!' />
          <form className='FormStyling' onSubmit={this.handleSubmit}><br />
            <label>
              Name:
              <input type="text" value={this.state.value} onChange={this.handleChange} />
            </label><br />
            <input type="submit" value="Submit" />
          </form>
          <form className='FormStyling' onSubmit={this.handleSubmit}><br />
            <label>
              Instrument:
              <input type="text" value={this.state.value} onChange={this.handleChange} />
            </label><br />
            <input type="submit" value="Submit" />
          </form>
          <form className='FormStyling' onSubmit={this.handleSubmit}><br />
            <label>
              Years Played:
              <input type="text" value={this.state.value} onChange={this.handleChange} />
            </label><br />
            <input type="submit" value="Submit" />
          </form>
        </MuiThemeProvider>
      </div>
    );
  }

}

export default BandForm;
