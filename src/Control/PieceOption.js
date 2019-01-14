import React, { Component } from 'react';

class PieceOption extends Component {
  deletePiece = () => {
    this.props.deletePiece(this.props.piece.id);
  }

  render() {
    return (
      <div className="pieceOption">
        <b>{this.props.piece.type}</b><br/>
        <button onClick={this.deletePiece}>delete</button>
      </div>
    );
  }
}

export default PieceOption;
