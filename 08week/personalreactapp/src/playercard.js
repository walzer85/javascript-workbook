import React, { Component } from 'react';
import SingleInput from './singleinput.js'

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

  componentDidMount() {
      fetch('.fake_db.json')
        .then(res => res.json())
        .then(data => {
            this.setState({
              name: data.name,
              instrument: data.instrument,
              yearsPlayed: data.yearsPlayed
            });
        });
  }

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
    console.log(`Send this in a POST request: ${formPayload}`);
    this.handleClear(e);
  }

  render() {
    return (
      <form className='container' onSubmit={this.handleSubmit}>
        <h4>Band Submission Form</h4>
        <SingleInput
          inputType={'text'}
          name={'name'}
          controlFunc={this.handleNameChange}
          content={this.state.name}
          placeholder={'Name'} />
        <SingleInput
          inputType={'text'}
          name={'instrument'}
          controlFunc={this.handleInstrumentChange}
          content={this.state.instrument}
          placeholder={'Instrument'} />
        <SingleInput
          inputType={'text'}
          name={'yearsPlayed'}
          controlFunc={this.handleYearsPlayedChange}
          content={this.state.yearsPlayed}
          placeholder={'Years You Have Played'} />
      </form>
    );
  }
};

export default PlayerCard;
