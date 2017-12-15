import React, { Component } from 'react';
import './App.css';
import StoryCard from './components/StoryCard';

class App extends Component {
  constructor(props){
    super(props);
    state = {
      story: [],
    }
  }

  renderStories() {
    return (
      this.state.story.map((item, key) => {
        return (
          <div key={key}>
          {item.url}
          </div>
        )
      })
    )
  }

  render() {
    return (
      <div className="App">
        {this.renderStories()}
      </div>
    );
  }
}

export default App;
