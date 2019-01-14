import React, { Component } from 'react';
import Canvas from './Canvas/Canvas.js';
import Control from './Control/Control.js';
import './App.css';

class App extends Component {
  state = {
    canvas: {
      "body-background-color": "blue",
      "body-background-color-input": "blue"
    }
  }

  changeBackgroundColor = (e) => {
    var newCanvasStyle = this.state.canvas;
    newCanvasStyle['body-background-color-input'] = e.target.value;
    this.setState({
      canvas: newCanvasStyle
    });
  }

  render() {
    return (
      <div className="App">
        <Canvas style={this.state.canvas}/>
        <Control style={this.state.canvas} changeBackgroundColor={this.changeBackgroundColor}/>
      </div>
    );
  }
}

export default App;
