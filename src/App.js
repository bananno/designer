import React, { Component } from 'react';
import Canvas from './Canvas/Canvas.js';
import Control from './Control/Control.js';
import './App.css';

class App extends Component {
  state = {
    canvas: {
      "body-background-color": "blue"
    }
  }

  render() {
    return (
      <div className="App">
        <Canvas style={this.state.canvas}/>
        <Control/>
      </div>
    );
  }
}

export default App;
