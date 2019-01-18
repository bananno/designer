import React, { Component } from 'react';
import Piece from './Piece.js';
import DeleteButton from '../pieces/deleteButton.js';

class Canvas extends Component {
  mapPieces = (thisPiece, i) => {
    return (
      <Piece data={thisPiece} key={i} editPieceText={this.props.editPieceText}
        state={this.props.state}
        setState={this.props.setState}
        showTools={this.props.showTools}
        reorderPieceItems={this.props.reorderPieceItems}>
          <DeleteButton piece={thisPiece} state={this.props.state}
            setState={this.props.setState}/>
      </Piece>
    );
  }

  render() {
    var bodyBackgroundColor = this.props.style['body-background-color'];
    return (
      <div id="canvas" style={{"backgroundColor": bodyBackgroundColor}}>
        {this.props.pieces.map(this.mapPieces)}
      </div>
    );
  }
}

export default Canvas;
