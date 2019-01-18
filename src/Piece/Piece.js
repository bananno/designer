import React, { Component } from 'react';
import Title from './title.js';

class Piece extends Component {
  render() {
    var pieceType = this.props.data.type;

    if (pieceType === 'title') {
      return (
        <Title data={this.props.data} editPieceText={this.props.editPieceText}/>
      );
    }

    if (pieceType == 'navigation') {
      return (
        <div class="piece navigation">
          <ul>
            <li>item</li>
            <li>item</li>
            <li>item</li>
          </ul>
        </div>
      );
    }

    if (pieceType == 'banner') {
      return (
        <div class="piece banner"> </div>
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
