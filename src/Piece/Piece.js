import React, { Component } from 'react';

class Piece extends Component {
  render() {
    if (this.props.type == 'title') {
      return (
        <h1>TITLE</h1>
      );
    }
    if (this.props.type == 'main-content') {
      return (
        <div>MAIN CONTENT</div>
      );
    }
    return (
      <div>
        PIECE
      </div>
    );
  }
}

export default Piece;
