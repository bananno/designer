import React, { Component } from 'react';
import Piece from './Piece.js';

class Canvas extends Component {
  render() {
    var bodyBackgroundColor = this.props.style['body-background-color'];
    return (
      <div className="block" id="canvas" style={{"backgroundColor": bodyBackgroundColor}}>
        {this.props.pieces.map((thisPiece, i) => {
          return <Piece data={thisPiece} key={i} editPieceText={this.props.editPieceText}
            state={this.props.state}
            setState={this.props.setState}
            showTools={this.props.showTools}
            reorderPieceItems={this.props.reorderPieceItems}/>
        })}
      </div>
    );
  }
}

export default Canvas;
