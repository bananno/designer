import React, { Component } from 'react';
import Canvas from './components/Canvas.js';
import Control from './components/Control.js';
import createPiece from './helpers/createPiece.js';

class App extends Component {
  state = {
    pieces: [],
    canvas: {
      "body-background-color": "blue",
      "body-background-color-input": "blue"
    },
    pieceIdCount: 0,
    showTools: {},
  }

  componentDidMount () {
    this.addNewPiece({
      type: 'title'
    });
    this.addNewPiece({
      type: 'navigation',
      items: ['Home', 'Products', 'Services', 'Blog', 'Contact']
    });
    this.addNewPiece({
      type: 'break'
    });
    this.addNewPiece({
      type: 'banner'
    });
    this.addNewPiece({
      type: 'break'
    });
    this.addNewPiece({
      type: 'content'
    });
    this.addNewPiece({
      type: 'content'
    });
    this.addNewPiece({
      type: 'content'
    });
  }

  setStateWrap = (newState) => {
    this.setState(newState);
  }

  addNewPiece = (specs) => {
    specs.id = this.state.pieceIdCount;
    var newState = this.state;
    newState.pieces.push(createPiece(specs));
    newState.pieceIdCount += 1;
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
        <Control state={this.state} setState={this.setStateWrap}
          addNewPiece={this.addNewPiece}/>
        <Canvas state={this.state} setState={this.setStateWrap}
          editPieceText={this.editPieceText}
          reorderPieceItems={this.reorderPieceItems}/>
      </div>
    );
  }
}

export default App;
