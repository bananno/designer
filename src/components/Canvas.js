import React, { Component } from 'react';
import Piece from './Piece.js';

class Canvas extends Component {
  mapCanvasSections = (thisBox, i) => {
    return (
      <div className="canvas-section" key={i}>
        {thisBox.map(this.mapPieces)}
      </div>
    );
  }

  mapPieces = (thisPiece, i) => {
    return (
      <Piece data={thisPiece} key={thisPiece.id}
        editPieceText={this.props.editPieceText}
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

    let canvasSections = [];
    let nextSection = [];

    this.props.state.pieces.forEach(piece => {
      if (piece.type === 'break') {
        canvasSections.push(nextSection);
        nextSection = [];
      } else {
        nextSection.push(piece);
      }
    });

    canvasSections.push(nextSection);

    return (
      <div id="canvas" style={{"backgroundColor": bodyBackgroundColor}}>
        {canvasSections.map(this.mapCanvasSections)}
      </div>
    );
  }
}

export default Canvas;
