import React, { Component } from 'react';

import Title from '../pieces/title.js';
import Navigation from '../pieces/navigation.js';
import Banner from '../pieces/banner.js';

class Piece extends Component {
  pieceActions = {
  }

  render() {
    const pieceType = this.props.data.type;

    if (pieceType === 'title') {
      return (
        <Title data={this.props.data}
          editPieceText={this.props.editPieceText}
          pieceActions={this.pieceActions}
          showTools={this.props.showTools}
          > {this.props.children} </Title>
      );
    }

    if (pieceType === 'navigation') {
      return (
        <Navigation piece={this.props.piece}
          state={this.props.state}
          setState={this.props.setState}
          reorderPieceItems={this.props.reorderPieceItems}
          pieceActions={this.pieceActions}
          showTools={this.props.showTools}
          > {this.props.children} </Navigation>
      );
    }

    if (pieceType === 'banner') {
      return (
        <Banner piece={this.props.piece}
          state={this.props.state}
          setState={this.props.setState}
          > {this.props.children} </Banner>
      );
    }

    return (
      <div>
        PIECE (type = {pieceType})
        {this.props.children}
      </div>
    );
  }
}

export default Piece;
