import React, { Component } from 'react';
import NewTask from './Components/NewTask.js'
import List from './Components/List.js'

import './App.css';

class App extends Component {
    constructor() {
      super();
      this.state = {
        toDoList: [
          'Rule the world',
          'Beat Spelunky in Single-Player mode',
          'Master React'
        ],
        userInput: ''
      }

      this.handleAddTask = this.handleAddTask.bind(this);
      this.handleInput = this.handleInput.bind(this);
      
    }

  handleAddTask() {
    this.setState({
      toDoList: [...this.state.toDoList, this.state.userInput],
      userInput: ''
    })
  }

  handleInput( e ){
    this.setState({
      userInput: e
    })
  }

  render() {
    return (
      <div className="App">
        <h1>My To-Do List:</h1>
        <NewTask add={this.handleAddTask} handle={this.handleInput}/>
        <List tasks={this.state.toDoList}/>
      </div>
    );
  }
}

export default App;
