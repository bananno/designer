import React, { Component } from 'react';
import Canvas from './Canvas/Canvas.js';
import Control from './Control/Control.js';
import createPiece from './helpers/createPiece.js';
import toolList from './constants/tools.js';
import './App.css';
import './pieces/pieces.css';

class App extends Component {
  constructor(props) {
    super(props);

    let initialState = {
      pieces: [
        createPiece({
          type: 'title',
          id: 0
        }),
        createPiece({
          type: 'navigation',
          items: ['Home', 'Products', 'Services', 'Blog', 'Contact'],
          id: 1
        }),
        createPiece({
          type: 'banner',
          id: 2
        }),
        createPiece({
          type: 'content',
          id: 3
        }),
      ],
      canvas: {
        "body-background-color": "blue",
        "body-background-color-input": "blue"
      },
      showTools: {},
    };

    initialState.pieceIdCount = initialState.pieces.length;

    toolList.forEach(toolInfo => {
      initialState.showTools[toolInfo.name] = false;
    });

    this.state = initialState;
  }

  setStateWrap = (newState) => {
    this.setState(newState);
  }

  editPieceTextToggleView = (pieceId, toggle) => {
    let newState = this.state;
    newState.pieces = newState.pieces.map((thisPiece) => {
      if (thisPiece.id === pieceId) {
        thisPiece.editing = toggle;
        if (!toggle) {
          thisPiece.textInput = thisPiece.text;
        }
      }
      return thisPiece;
    });
    this.setState(newState);
  }

  editPieceTextInput = (pieceId, newText) => {
    let newState = this.state;
    newState.pieces = newState.pieces.map((thisPiece) => {
      if (thisPiece.id === pieceId) {
        thisPiece.textInput = newText;
      }
      return thisPiece;
    });
    this.setState(newState);
  }

  editPieceTextSave = (pieceId) => {
    let newState = this.state;
    newState.pieces = newState.pieces.map((thisPiece) => {
      if (thisPiece.id === pieceId) {
        thisPiece.text = thisPiece.textInput;
        thisPiece.editing = false;
      }
      return thisPiece;
    });
    this.setState(newState);
  }

  editPieceText = {
    toggleView: this.editPieceTextToggleView,
    changeInput: this.editPieceTextInput,
    clickSave: this.editPieceTextSave,
  }

  dragPieceItemStart = (pieceId, dragIndex) => {
    let newState = this.state;
    newState.pieces = newState.pieces.map((thisPiece) => {
      if (thisPiece.id === pieceId) {
        thisPiece.dragging = dragIndex;
      }
      return thisPiece;
    });
    this.setState(newState);
  }

  dragPieceItemEnter = (pieceId, placeBefore) => {
    let newState = this.state;
    newState.pieces = newState.pieces.map((thisPiece) => {
      if (thisPiece.id === pieceId) {

        let dragIndex = thisPiece.dragging;

        if (placeBefore === dragIndex || placeBefore === dragIndex + 1) {
          return thisPiece;
        }

        let newArray = [];

        for (let i = 0; i <= thisPiece.items.length; i++) {

          if (i === placeBefore) {
            newArray.push(thisPiece.items[dragIndex]);
          }

          if (i === dragIndex) {
            continue;
          }

          if (i < thisPiece.items.length) {
            newArray.push(thisPiece.items[i]);
          }
        }

        thisPiece.items = newArray;
        thisPiece.dragging = null;

      }
      return thisPiece;
    });
    this.setState(newState);
  }

  reorderPieceItems = {
    dragStart: this.dragPieceItemStart,
    dragEnter: this.dragPieceItemEnter,
  }

  render() {
    return (
      <div className="App">
        <Control state={this.state} setState={this.setStateWrap}/>
        <Canvas state={this.state} setState={this.setStateWrap}
          editPieceText={this.editPieceText}
          reorderPieceItems={this.reorderPieceItems}/>
      </div>
    );
  }
}

export default App;
