import React, { Component } from 'react';
import Title from '../pieces/title.js';
import Navigation from '../pieces/navigation.js';
import Banner from '../pieces/banner.js';
import Content from '../pieces/content.js';
import DeleteButton from '../bits/deleteButton.js';

class Piece extends Component {
  pieceActions = {
  }

  render() {
    const pieceType = this.props.data.type;

    let deleteButton = <DeleteButton piece={this.piece} state={this.props.state}
      setState={this.props.setState}/>

    if (pieceType === 'title') {
      return (
        <Title data={this.props.data}
          editPieceText={this.props.editPieceText}
          pieceActions={this.pieceActions}
          showTools={this.props.showTools}
          > {deleteButton} </Title>
      );
    }

    if (pieceType === 'navigation') {
      return (
        <Navigation piece={this.props.piece}
          state={this.props.state}
          setState={this.props.setState}
          reorderPieceItems={this.props.reorderPieceItems}
          > {deleteButton} </Navigation>
      );
    }

    if (pieceType === 'banner') {
      return (
        <Banner piece={this.props.piece}
          state={this.props.state}
          setState={this.props.setState}
          > {deleteButton} </Banner>
      );
    }

    if (pieceType === 'content') {
      return (
        <Content piece={this.props.piece}
          state={this.props.state}
          setState={this.props.setState}
          > {deleteButton} </Content>
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
