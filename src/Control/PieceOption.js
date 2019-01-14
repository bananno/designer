import React, { Component } from 'react';

class PieceOption extends Component {
  render() {
    return (
      <div className="pieceOption">
        Type: {this.props.piece.type}
        <br/>
        <button onClick={this.props.deletePiece}>delete</button>
      </div>
    );
  }
}

export default PieceOption;
