import React, { Component } from 'react';
import './App.css';
import { connect, Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';

//REDUCERS

const reducers = {
  todos: (state = [], action) => {
    switch(action.type) {
      case 'ADD_TODO':
      return [
        ...state,
        {
          ...action.todo,
          id: state.length + 1
        }
      ]
    default:
      return state
    }
  }
}

//STORE

const store = createStore(combineReducers(reducers),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

function mapStateToProps(state) {
  const { todos } = state;
  return { todos }
}

//COMPONENTS

class List extends Component{
  constructor(props){
    super(props)
    this.state = {
      title: 'Personal',
      todos: []
    }
  }

  todo = () => {
    return this.state.todos.map(todo => {
      return <li key={todo.id}>{todo.text}</li>
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      todos: [
        ...this.state.todos,
        {
        id: this.state.todos.length + 1,
        text: this.refs.text.value
      }]
    })
    this.refs.text.value='';
  }

  render(){
    return (
      <div>
        <p>{this.state.title}</p>
        <ul>
          {this.todo()}
        </ul>
        <form onSubmit={this.handleSubmit}>
          <input ref='text' type='text' placeholder={`Add a ${this.state.title} todo`} />
        <button type='submit'>Submit</button>
        </form>
      </div>
    );
  }

List = connect(mapStateToProps)(List);

export default List;
