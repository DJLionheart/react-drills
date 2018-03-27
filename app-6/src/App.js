import React, { Component } from 'react';
import Todo from './Todo.js'
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

    this.handleInput = this.handleInput.bind(this);
    this.addToList = this.addToList.bind(this);
  }

  handleInput( e ) {
    this.setState({
      userInput: e
    })
  }

  addToList() {
    var todos = this.state.toDoList;
    todos.push(this.state.userInput);
    this.setState({
      toDoList: todos,
      userInput: ''
    })

  }

  render() {
    return (
      <div className="App">
        <Todo inputText={this.handleInput}
        taskList={this.state.toDoList}
        buttonFunc={this.addToList}/>

      </div>
    );
  }
}

export default App;
