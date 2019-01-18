import React, { Component } from 'react';

class Piece extends Component {
  render() {
    var pieceType = this.props.data.type;

    if (pieceType == 'title') {
      return (
        <h1 class="piece title">TITLE</h1>
      );
    }

    if (pieceType == 'navigation') {
      return (
        <ul class="piece navigation">
          <li>item</li>
          <li>item</li>
          <li>item</li>
        </ul>
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
