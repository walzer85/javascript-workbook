import React, { Component } from 'react';
import './App.css';
inport StoryCard from './components/StoryCard';

class App extends Component {
  render() {
    return (
      <div className="App">
        {this.renderStories()}
      </div>
    );
  }
}

export default App;
