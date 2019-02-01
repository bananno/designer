import React, { Component } from 'react';

import Title from '../pieces/title.js';
import Navigation from '../pieces/navigation.js';
import Banner from '../pieces/banner.js';
import Content from '../pieces/content.js';

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

    if (pieceType === 'content') {
      return (
        <Content piece={this.props.piece}
          state={this.props.state}
          setState={this.props.setState}
          > {this.props.children} </Content>
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
