import React, { Component } from 'react';
import Title from '../Piece/title.js';
import Navigation from '../Piece/navigation.js';

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
        <Navigation data={this.props.data} reorderPieceItems={this.props.reorderPieceItems}
          showTools={this.props.showTools}/>
      );
    }

    if (pieceType === 'banner') {
      return (
        <div className="piece banner"> </div>
        // <img src="/designs/banner-bg.png"/>
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
