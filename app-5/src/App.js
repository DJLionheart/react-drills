import React, { Component } from 'react';
import './App.css';
import Image from './Image.js'

class App extends Component {
  constructor() {
    super();
    this.state = {
      imageLink: 'https://images-1.gog.com/f907b55b7d0a98b9c0c5ae1c82cd52a4b4fd6b2cf9a38dfd25e69bf8fc9a00f5.jpg',
      imageDescription: 'Spelunky Wallpaper',
      width: '1000px'
    }
  }
  render() {
    return (
      <div className="App">
          <Image spelunky={this.state.imageLink}
          desc={this.state.imageDescription}
          width={this.state.width}/>
      </div>
    );
  }
}

export default App;
