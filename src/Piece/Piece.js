import React, { Component } from 'react';

class Piece extends Component {
  render() {
    var pieceType = this.props.data.type;

    if (pieceType == 'title') {
      return (
        <h1>TITLE</h1>
      );
    }
    if (pieceType == 'content') {
      return (
        <div>CONTENT</div>
      );
    }
    return (
      <div>
        PIECE (type = {pieceType})
      </div>
    );
  }
}

export default Piece;
