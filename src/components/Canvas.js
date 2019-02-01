import React, { Component } from 'react';
import Section from './Section.js';
import Piece from './Piece.js';

class Canvas extends Component {
  mapCanvasSections = (pieceList, i) => {
    if (pieceList.length === 0) {
      return null;
    }

    let section = pieceList[0];
    let pieces = pieceList.slice(1);

    return (
      <Section section={section} key={section.id}
          state={this.props.state} setState={this.props.setState}>
        {pieces.map(this.mapPieces)}
      </Section>
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
    let canvasSections = [];
    let nextSection = [];

    this.props.state.pieces.forEach(piece => {
      if (piece.type === 'section') {
        if (nextSection.length) {
          canvasSections.push(nextSection);
          nextSection = [];
        }
        nextSection.push(piece);
      } else {
        nextSection.push(piece);
      }
    });

    canvasSections.push(nextSection);

    let style = {
      backgroundColor: this.props.state.bodyBackgroundColor || 'white'
    };

    return (
      <div id="canvas" style={style}>
        {canvasSections.map(this.mapCanvasSections)}
      </div>
    );
  }
}

export default Canvas;
