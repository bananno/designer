import React, { Component } from 'react';
import Canvas from './Canvas/Canvas.js';
import Control from './Control/Control.js';
import './App.css';

class App extends Component {
  state = {
    canvas: {
      "background-color": "blue"
    }
  }

  render() {
    return (
      <div className="App">
        <Canvas/>
        <Control/>
      </div>
    );
  }
}

export default App;
