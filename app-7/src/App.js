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
      }

      this.addTask = this.addTask.bind(this);
    }

  addTask( task ) {
    this.setState({
      toDoList: [...this.state.toDoList, task],
    })
  }

  render() {

    const { toDoList } = this.state;

    return (
      <div className="App">
        <h1>My To-Do List:</h1>
        <NewTask addTask={ this.addTask }/>
        <List toDoList={ toDoList }/>
      </div>
    );
  }
}

export default App;
