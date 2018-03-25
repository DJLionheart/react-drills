import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor() {
    super();

    this.state = {
      spelunkyItems: [
        'bombs',
        'ropes',
        'whip',
        'spikey boots',
        'climbing glove',
        'catcher\'s mit',
        'jetpack',
        'mattock',
        'shotgun',
        'freeze ray',
        'boomerang',
        'golden idol'
      ],
      form: ''
    }
  }

  handleForm(e) {
    this.setState({
      form: e
    })
  }
  render() {
    let { spelunkyItems, form } = this.state;
    let filteredList = spelunkyItems.filter( (e, i) => e.includes(form)).map( ( e, i ) => (
      <div key={i}>
        <h2>{e}</h2>
      </div>
    ));


    return (
      <div className="App">
        <h1>Spelunky Items</h1>
        <input type="text"
        onChange={ ( e ) => this.handleForm( e.target.value) }
        value={ form }/>
          {filteredList}
      </div>
    );
  }
}

export default App;
