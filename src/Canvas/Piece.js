import React, { Component } from 'react';

import Title from '../pieces/title.js';
import Navigation from '../pieces/navigation.js';
import Banner from '../pieces/banner.js';
import DeleteButton from '../pieces/deleteButton.js';

class Piece extends Component {
  deletePiece = () => {
    var newState = this.props.state;

    newState.pieces = newState.pieces.filter((thisPiece) => {
      return thisPiece.id !== this.props.data.id;
    });

    this.props.setState(newState);
  }

  pieceActions = {
    delete: this.deletePiece,
  }

  render() {
    const pieceType = this.props.data.type;

    if (pieceType === 'title') {
      return (
        <Title data={this.props.data}
          editPieceText={this.props.editPieceText}
          pieceActions={this.pieceActions}
          showTools={this.props.showTools}
          />
      );
    }

    if (pieceType === 'navigation') {
      return (
        <Navigation data={this.props.data}
          reorderPieceItems={this.props.reorderPieceItems}
          pieceActions={this.pieceActions}
          showTools={this.props.showTools}
          />
      );
    }

    if (pieceType === 'banner') {
      return (
        <Banner data={this.props.data}
          pieceActions={this.pieceActions}
          showTools={this.props.showTools}
          />
      );
    }

    return (
      <div>
        PIECE (type = {pieceType})
        <DeleteButton showDelete={this.props.showTools.delete} delete={this.pieceActions.delete}/>
      </div>
    );
  }
}

export default Piece;
