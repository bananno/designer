import React, { Component } from 'react';

class PieceOption extends Component {
  render() {
    return (
      <div className="pieceOption">
        Type: {this.props.piece.type}
      </div>
    );
  }
}

export default PieceOption;
