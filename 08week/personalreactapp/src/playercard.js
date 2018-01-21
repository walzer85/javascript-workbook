import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import SingleInput from './singleinput.js';
import './App.css'
import PlayerDisplay from './playerdisplay.js'

class PlayerCard extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      name: '',
      instrument: '',
      yearsPlayed: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClear = this.handleClear.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleInstrumentChange = this.handleInstrumentChange.bind(this);
    this.handleYearsPlayedChange = this.handleYearsPlayedChange.bind(this);
  }

  // componentDidMount() {
  //     fetch('.fake_db.json')
  //       .then(res => res.json())
  //       .then(data => {
  //           this.setState({
  //             name: data.name,
  //             instrument: data.instrument,
  //             yearsPlayed: data.yearsPlayed
  //           });
  //       });
  // }

  handleNameChange(e) {
    this.setState({ name: e.target.value});
    console.log(`name: ${this.state.name}`);
  }

  handleInstrumentChange(e) {
    this.setState({ instrument: e.target.value});
    console.log(`instrument: ${this.state.instrument}`);
  }

  handleYearsPlayedChange(e) {
    this.setState({ yearsPlayed: e.target.value});
    console.log(`years played: ${this.state.yearsPlayed}`);
  }

  handleClear(e) {
    e.preventDefault();
    this.setState({
      name: '',
      instrument: '',
      yearsPlayed: ''
    })
  }

  handleSubmit(e) {
    e.preventDefault();

    const formPayload = {
      name: this.state.name,
      instrument: this.state.instrument,
      yearsPlayed: this.state.yearsPlayed
    }

    render ({
      return (
        <PlayerDisplay />
      )
    })

    this.handleClear(e);
  }

  render() {
    return (
      <div>
      <form className='container' onSubmit={this.handleSubmit}>
        <h4>Band Submission Form</h4>
        <SingleInput className='singleinput'
          inputType={'text'}
          name={'name'}
          controlFunc={this.handleNameChange}
          content={this.state.name}
          placeholder={'Name'} />
        <SingleInput className='singleinput'
          inputType={'text'}
          name={'instrument'}
          controlFunc={this.handleInstrumentChange}
          content={this.state.instrument}
          placeholder={'Instrument'} />
        <SingleInput className='singleinput'
          inputType={'text'}
          name={'yearsPlayed'}
          controlFunc={this.handleYearsPlayedChange}
          content={this.state.yearsPlayed}
          placeholder={'Years You Have Played'} />
      </form>
      <MuiThemeProvider>
        <RaisedButton type="submit" label="Primary" primary={true} style={this.style} onClick={this.handleSubmit}/>
      </MuiThemeProvider>
      </div>
    );
  }
};

export default PlayerCard;
