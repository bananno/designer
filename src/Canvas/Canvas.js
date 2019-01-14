import React, { Component } from 'react';
import Piece from '../Piece/Piece.js';

class Canvas extends Component {
  render() {
    var bodyBackgroundColor = this.props.style['body-background-color'];
    return (
      <div className="block" style={{"backgroundColor": bodyBackgroundColor}}>
        <Piece/>
        <Piece/>
      </div>
    );
  }
}

export default Canvas;
