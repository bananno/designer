import React, { Component } from 'react';
import Title from '../pieces/title.js';
import Navigation from '../pieces/navigation.js';
import Banner from '../pieces/banner.js';
import Content from '../pieces/content.js';
import DeleteButton from '../bits/deleteButton.js';

class Piece extends Component {
  pieceActions = {
  }

  togglePieceTools = (piece) => {
    return () => {
      let newState = this.props.state;

      newState.pieces = newState.pieces.map(thisPiece => {
        if (thisPiece === piece) {
          thisPiece.showTools = !thisPiece.showTools;
        }
        return thisPiece;
      });

      this.props.setState(newState);
    };
  };

  render() {
    const pieceType = this.props.data.type;

    let deleteButton = <DeleteButton piece={this.piece} state={this.props.state}
      setState={this.props.setState}/>

    let editButton = <button onClick={this.togglePieceTools(this.props.data)}
      className="edit-piece">edit</button>

    if (pieceType === 'title') {
      return (
        <Title data={this.props.data}
          editPieceText={this.props.editPieceText}
          pieceActions={this.pieceActions}
          showTools={this.props.showTools}
          > {deleteButton} {editButton} </Title>
      );
    }

    if (pieceType === 'navigation') {
      return (
        <Navigation piece={this.props.piece}
          state={this.props.state}
          setState={this.props.setState}
          reorderPieceItems={this.props.reorderPieceItems}
          > {deleteButton} {editButton} </Navigation>
      );
    }

    if (pieceType === 'banner') {
      return (
        <Banner piece={this.props.piece}
          state={this.props.state}
          setState={this.props.setState}
          editButton={editButton}
          >
          {deleteButton}
        </Banner>
      );
    }

    if (pieceType === 'content') {
      return (
        <Content piece={this.props.piece}
          state={this.props.state}
          setState={this.props.setState}
          > {deleteButton} {editButton} </Content>
      );
    }

    return (
      <div>
        PIECE (type = {pieceType})
        {this.props.children}
        {deleteButton}
        {editButton}
      </div>
    );
  }
}

export default Piece;
