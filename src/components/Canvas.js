import React, { Component } from 'react';
import Piece from './Piece.js';

class Canvas extends Component {
  mapPieces = (thisPiece, i) => {
    return (
      <Piece data={thisPiece} key={i} editPieceText={this.props.editPieceText}
        state={this.props.state}
        setState={this.props.setState}
        piece={thisPiece}
        showTools={this.props.state.showTools}
        reorderPieceItems={this.props.reorderPieceItems}
        />
    );
  }

  render() {
    var bodyBackgroundColor = this.props.state.canvas['body-background-color'];
    return (
      <div id="canvas" style={{"backgroundColor": bodyBackgroundColor}}>
        {this.props.state.pieces.map(this.mapPieces)}
      </div>
    );
  }
}

export default Canvas;
