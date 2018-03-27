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

      this.handleAddTask = this.handleAddTask.bind(this);
    }

  handleAddTask( task ) {
    this.setState({
      toDoList: [...this.state.toDoList, task],
    })
  }

  render() {
    return (
      <div className="App">
        <h1>My To-Do List:</h1>
        <NewTask add={this.handleAddTask}/>
        <List tasks={this.state.toDoList}/>
      </div>
    );
  }
}

export default App;
