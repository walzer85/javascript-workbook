import React, { Component } from 'react';
import './App.css';

class App extends Component {

  componentDidMount(){
    fetch('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty').then((res) => {
      res.json().then((storyIds) => {
        storyIds.forEach((storyId) => {
          fetch(`https://hacker-news.firebaseio.com/v0/item/${storyId}.json?print=pretty`).then((res) => {
            res.json().then((story) => {
              console.log(story);
            })
          });
        });
      });
    });
}

  stories(){
    fetch
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Hacker News by Me, not really though.</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
