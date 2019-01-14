import React, { Component } from 'react';
import Canvas from './Canvas/Canvas.js';
import Control from './Control/Control.js';
import './App.css';

const pieceTypes = [
  'title',
  'content',
  'logo',
];

class App extends Component {
  state = {
    pieces: [
      { type: 'title' },
      { type: 'content' }
    ],
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

  saveBackgroundColorField = () => {
    var newCanvasStyle = this.state.canvas;
    newCanvasStyle['body-background-color'] = newCanvasStyle['body-background-color-input'];
    this.setState({
      canvas: newCanvasStyle
    });
  }

  resetBackgroundColorField = () => {
    var newCanvasStyle = this.state.canvas;
    newCanvasStyle['body-background-color-input'] = newCanvasStyle['body-background-color'];
    this.setState({
      canvas: newCanvasStyle
    });
  }

  addNewPiece = () => {
    var newState = this.state;
    var pieceType = document.getElementById('addNewPieceType').value;
    newState.pieces.push({
      type: pieceType
    });
    this.setState(newState);
  }

  render() {
    return (
      <div className="App">
        <Control style={this.state.canvas}
          changeBackgroundColor={this.changeBackgroundColor}
          saveBackgroundColorField={this.saveBackgroundColorField}
          resetBackgroundColorField={this.resetBackgroundColorField}
          addNewPiece={this.addNewPiece}
          pieceTypes={pieceTypes}
          />
        <Canvas
          style={this.state.canvas}
          pieces={this.state.pieces}
          />
      </div>
    );
  }
}

export default App;
