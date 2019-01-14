import React, { Component } from 'react';

class Piece extends Component {
  render() {
    var pieceType = this.props.data.type;

    if (pieceType == 'title') {
      return (
        <h1>TITLE</h1>
      );
    }
    if (pieceType == 'main-content') {
      return (
        <div>MAIN CONTENT</div>
      );
    }
    return (
      <div>
        PIECE
      </div>
    );
  }
}

export default Piece;
