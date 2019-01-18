import React, { Component } from 'react';
import Title from './title.js';
import Navigation from './navigation.js';

class Piece extends Component {
  render() {
    var pieceType = this.props.data.type;

    if (pieceType === 'title') {
      return (
        <Title data={this.props.data} editPieceText={this.props.editPieceText}/>
      );
    }

    if (pieceType === 'navigation') {
      return (
        <Navigation data={this.props.data} reorderPieceItems={this.props.reorderPieceItems}/>
      );
    }

    if (pieceType === 'banner') {
      return (
        <div className="piece banner"> </div>
      );
    }

    if (pieceType === 'content') {
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
