import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      list: [
        'katsudon',
        'oyakodon',
        'sushi',
        'katsu curry',
        'udon',
        'ramen'],
      userInput: ''
    }
  }

  handleInput( e ) {
    this.setState({
      userInput: e
    })
  }

  render() {
    var { list, userInput } = this.state;

    let filteredList = list.filter( (val, i) => (val.includes(userInput))).map( (e,i) => (
      <div key={i}>
        <h2>{e}</h2>
      </div>
    ))

    return (
      <div className="App">
        <input onChange={ (e) => this.handleInput(e.target.value)}
        value={userInput}/>
        <h1>Japanese Food</h1>
        {filteredList}
      </div>
    );
  }
}

export default App;
