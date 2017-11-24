import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';



class App extends Component {
  constructor(props) {
  super(props);
  this.state = {
     timeLineData: [
        {name: 'renee', post: 'I love kitties', id: 1},
        {name: 'stevie', post: 'I love dogs', id: 2},
        {name: 'groot', post: 'I Am Groot', id: 3},
        {name: 'luke', post: 'blah blah blah', id: 4},
        {name: 'vader', post: 'I am your father', id: 5},
        {name: 'lea', post: 'Pizza', id: 6},
        {name: 'tamra', post: 'Workout', id: 7},
        {name: 'vicky', post: 'Coto Insurance', id: 8},
    ]
  }
}
  renderPosts=()=> {
    console.log('here');
    return this.state.timeLineData.map((item, key) => {
      return <div key={key}>
        <p>{item.name}</p>
        <p>{item.post}</p>
      </div>
    })
  }
  render() {
    return (
      <div className="App">
        <h2>Your Wall</h2>
        {this.renderPosts()}
      </div>
    );
  }
}

export default App;
