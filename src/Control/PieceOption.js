import React, { Component } from 'react';

class PieceOption extends Component {
  deletePiece = () => {
    this.props.deletePiece(this.props.piece.id);
  }

  render() {
    return (
      <div className="pieceOption">
        Type: {this.props.piece.type}
        <br/>
        <button onClick={this.deletePiece}>delete</button>
      </div>
    );
  }
}

export default PieceOption;
