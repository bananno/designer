import React, { Component } from 'react';

import Title from '../pieces/title.js';
import Navigation from '../pieces/navigation.js';
import Banner from '../pieces/banner.js';

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
        <Banner data={this.props.data}/>
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
