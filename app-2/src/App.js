import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      list: ['katsudon', 'oyakodon', 'sushi', 'katsu curry', 'udon', 'ramen']
    }
  }

  render() {
    var { list } = this.state;
    var foodList = list.map( (e, i) => (
      <div key={i}>
        <h2>{e}</h2>
      </div>
    ));

    return (
      <div className="App">
       {foodList} 
      </div>
    );
  }
}
export default App;
