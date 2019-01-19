import React, { Component } from 'react';
import createPiece from '../helpers/createPiece.js';
import pieceTypes from '../helpers/pieceTypes.js';
import toolList from '../helpers/toolList.js';

class Control extends Component {
  mapToolList = (toolInfo, i) => {
    const toggle = () => {
      let newState = this.props.state;
      newState.showTools[toolInfo.name] = !newState.showTools[toolInfo.name];
      this.props.setState(newState);
    };

    let toolId = 'toggleTool-' + toolInfo.name;

    return (
      <div key={i}>
        <input type="checkbox" id={toolId} onChange={toggle}/>
        <label htmlFor={toolId}>{toolInfo.description}</label>
      </div>
    );
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

        {toolList.map(this.mapToolList)}

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
