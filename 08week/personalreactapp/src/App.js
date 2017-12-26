import React from 'react';
import { render } from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import './App.css'



class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: [],
      instrument: [],
      yearsPlayed: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    render(){
      return (
        <div>
        
        </div>
      )
    }
  }

  render() {
    return (
      <div className='AppStyling'>
        <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
          <AppBar title='Make A Band!' />
          <form className='FormStyling' onSubmit={this.handleSubmit}>
            <label>
              Name:
              <input type="text" value={this.state.name} onChange={this.handleChange} />
            </label>
            <input type="submit" value="Submit" />
          </form>
          <form className='FormStyling' onSubmit={this.handleSubmit}>
            <label>
              Instrument:
              <input type="text" value={this.state.instrument} onChange={this.handleChange} />
            </label>
            <input type="submit" value="Submit" />
          </form>
          <form className='FormStyling' onSubmit={this.handleSubmit}>
            <label>
              Years Played:
              <input type="text" value={this.state.yearsPlayed} onChange={this.handleChange} />
            </label>
            <input type="submit" value="Submit" />
          </form>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default NameForm;
