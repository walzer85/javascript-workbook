import React, { Component } from 'react';
import './App.css';
import StoryCard from './storycard';

class App extends Component {
    state = {
      story: [],
    }

  componentDidMount() {
    fetch('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty')
    .then((response) => {
      return response.json();
    })
    .then((storyIDs) => {
      storyIDs.slice(0, 20).forEach((storyID) => {
        fetch(`https://hacker-news.firebaseio.com/v0/item/${storyID}.json?print=pretty`)
        .then((response) => {
          return response.json()
        })
        .then((story) => {
          this.setState({story: [...this.state.story, story]});
        })
      });
    });
  }

  handleClick() {
    return (
      this.state.story.map((item, key) => {
        return(
          <div key={key}>
            {item.url}
          </div>
        )
      })
    );
  }

  renderStories() {
    return (
      this.state.story.map((item, key) => {
        return (
          <div key={key}>
            <StoryCard title={item.title} author={item.by} click={this.handleClick.bind(this)}/>
          </div>
        )
      })
    )
  }

  render() {
    return (
      <div className="App">
        <header className='header'>
          <p>Welcome to My Hacker News Site.</p>
          <p>It is a work in progress, I know.</p>
        </header>
        {this.renderStories()}
      </div>
    );
  }
}

export default App;
