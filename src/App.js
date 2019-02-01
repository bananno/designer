import React, { Component } from 'react';
import Canvas from './components/Canvas.js';
import Control from './components/Control.js';
import createPiece from './helpers/createPiece.js';
import presets from './constants/presets.js';

class App extends Component {
  state = {
    pieces: [],
    pieceIdCount: 0,
    showTools: {},
  }

  componentDidMount () {
    this.loadPresetCanvas(presets[0]);
  }

  setStateWrap = (newState) => {
    this.setState(newState);
  }

  loadPresetCanvas = (preset) => {
    let newState = {
      pieces: [],
      bodyBackgroundColor: preset.bodyBackgroundColor,
      bodyBackgroundColorInput: preset.bodyBackgroundColor,
      pieceIdCount: this.state.pieceIdCount,
    };

    // Cannot reuse existing "addNewPiece" function; for some reason it overwrites above changes.
    // preset.pieces.forEach(this.addNewPiece);

    preset.pieces.forEach(specs => {
      specs.id = newState.pieceIdCount;
      newState.pieces.push(createPiece(specs));
      newState.pieceIdCount += 1;
    });

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
          loadPresetCanvas={this.loadPresetCanvas}
          addNewPiece={this.addNewPiece}/>
        <Canvas state={this.state} setState={this.setStateWrap}
          editPieceText={this.editPieceText}
          reorderPieceItems={this.reorderPieceItems}/>
      </div>
    );
  }
}

export default App;
