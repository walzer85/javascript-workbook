import { Component } from 'react'
import './App.css'

class PlayerDisplay extends Component {
  render () {
    return (
      <div className='newplayer'>
        <h2>{this.props.name}</h2><br>
        <div className='whattheyplay'>
          <h4>{this.props.instrument}</h4>
          <h4>{this.props.yearsPlayed}</h4>
        </div>
      <div>
    )
  }
}

export default PlayerDisplay;
