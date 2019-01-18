import React, { Component } from 'react';
import createPiece from '../helpers/createPiece.js';
import pieceTypes from '../helpers/pieceTypes.js';

class Control extends Component {
  getToggleTool = (toolName) => {
    return () => {
      let newState = this.props.state;
      newState.showTools[toolName] = !newState.showTools[toolName];
      this.props.setState(newState);
    }
  }

  addNewPiece = () => {
    var newState = this.props.state;
    var pieceType = document.getElementById('addNewPieceType').value;
    let newPiece = createPiece({
      type: pieceType,
      id: newState.pieceIdCount
    });
    newState.pieces.push(newPiece);
    newState.pieceIdCount += 1;
    this.props.setState(newState);
  }

  bodyBackgroundColorChange = (e) => {
    let newState = this.props.state;
    newState.canvas['body-background-color-input'] = e.target.value;
    this.props.setState(newState);
  }

  bodyBackgroundColorSave = () => {
    let newState = this.props.state;
    newState.canvas['body-background-color'] = newState.canvas['body-background-color-input'];
    this.props.setState(newState);
  }

  bodyBackgroundColorReset = () => {
    let newState = this.props.state;
    newState.canvas['body-background-color-input'] = newState.canvas['body-background-color'];
    this.props.setState(newState);
  }

  render() {
    var bodyBackgroundColor = this.props.state.canvas['body-background-color-input'];
    return (
      <div id="control">
        <h1>Controls</h1>

        <div>
          <input type="checkbox" id="toggleToolReorder" onChange={this.getToggleTool('reorder')}/>
          <label htmlFor="toggleToolReorder">drag and drop to reorder</label>
        </div>

        <div>
          <input type="checkbox" id="toggleToolDelete" onChange={this.getToggleTool('delete')}/>
          <label htmlFor="toggleToolDelete">buttons to delete</label>
        </div>

        <div>
          Body background color:
          <input value={bodyBackgroundColor} onChange={this.bodyBackgroundColorChange}/>
          <button onClick={this.bodyBackgroundColorSave}>save</button>
          <button onClick={this.bodyBackgroundColorReset}>cancel</button>
        </div>

        <div>
          Add new piece:
          <select id="addNewPieceType">
            {pieceTypes.map((pieceType, i) => {
              return <option value={pieceType} key={i}>{pieceType}</option>;
            })}
          </select>
          <button onClick={this.addNewPiece}>add</button>
        </div>
      </div>
    );
  }
}

export default Control;
