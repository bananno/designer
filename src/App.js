import React, { Component } from 'react';
import Canvas from './Canvas/Canvas.js';
import Control from './Control/Control.js';
import './App.css';
import './Piece/piece.css';

const pieceTypes = [
  'title',
  'content',
  'logo',
];

class App extends Component {
  state = {
    pieces: [
      {
        type: 'title',
        text: 'TITLE',
        textInput: 'TITLE',
        editing: false,
        id: 0
      },
      {
        type: 'navigation',
        id: 1
      },
      {
        type: 'banner',
        id: 2
      },
      {
        type: 'content',
        id: 3
      }
    ],
    pieceIdCount: 2,
    canvas: {
      "body-background-color": "blue",
      "body-background-color-input": "blue"
    }
  }

  togglePieceEditing = (pieceId) => {
    let newState = this.state;
    newState.pieces = newState.pieces.map((thisPiece) => {
      if (thisPiece.id == pieceId) {
        thisPiece.editing = !(thisPiece.editing == true);
        if (!thisPiece.editing) {
          thisPiece.textInput = thisPiece.text;
        }
      }
      return thisPiece;
    });
    this.setState(newState);
  }

  editPieceText = (pieceId, newText) => {
    let newState = this.state;
    newState.pieces = newState.pieces.map((thisPiece) => {
      if (thisPiece.id == pieceId) {
        thisPiece.textInput = newText;
      }
      return thisPiece;
    });
    this.setState(newState);
  }

  savePieceText = (pieceId) => {
    let newState = this.state;
    newState.pieces = newState.pieces.map((thisPiece) => {
      if (thisPiece.id == pieceId) {
        thisPiece.text = thisPiece.textInput;
        thisPiece.editing = false;
      }
      return thisPiece;
    });
    this.setState(newState);
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
      type: pieceType,
      id: this.state.pieceIdCount
    });
    newState.pieceIdCount += 1;
    this.setState(newState);
  }

  deletePiece = (deleteId) => {
    var newState = this.state;
    newState.pieces = newState.pieces.filter((thisPiece) => {
      return thisPiece.id != deleteId;
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
          deletePiece={this.deletePiece}
          currentPieces={this.state.pieces}
          pieceTypes={pieceTypes}
          />
        <Canvas
          style={this.state.canvas}
          pieces={this.state.pieces}
          togglePieceEditing={this.togglePieceEditing}
          editPieceText={this.editPieceText}
          savePieceText={this.savePieceText}
          />
      </div>
    );
  }
}

export default App;
