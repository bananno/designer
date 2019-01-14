import React, { Component } from 'react';
import PieceOption from './PieceOption.js';

class Control extends Component {
  render() {
    var bodyBackgroundColor = this.props.style['body-background-color-input'];
    return (
      <div className="block">
        <h1>Controls</h1>
        <div>
          Body background color:
          <input value={bodyBackgroundColor} onChange={this.props.changeBackgroundColor}/>
          <button onClick={this.props.saveBackgroundColorField}>save</button>
          <button onClick={this.props.resetBackgroundColorField}>cancel</button>
        </div>

        {this.props.currentPieces.map((thisPiece, i) => {
          return <PieceOption piece={thisPiece} key={i} deletePiece={this.props.deletePiece}/>;
        })}

        <div>
          Add new piece:
          <select id="addNewPieceType">
            {this.props.pieceTypes.map((pieceType, i) => {
              return <option value={pieceType} key={i}>{pieceType}</option>;
            })}
          </select>
          <button onClick={this.props.addNewPiece}>add</button>
        </div>
      </div>
    );
  }
}

export default Control;
