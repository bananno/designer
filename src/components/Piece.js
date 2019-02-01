import React, { Component } from 'react';
import Title from '../pieces/title.js';
import Navigation from '../pieces/navigation.js';
import Banner from '../pieces/banner.js';
import Content from '../pieces/content.js';
import DeleteButton from '../bits/deleteButton.js';

class Piece extends Component {
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

  changePiece = (piece) => {
    return (attribute, newValue) => {
      let newState = this.props.state;

      newState.pieces = newState.pieces.map(thisPiece => {
        if (thisPiece === piece) {
          thisPiece[attribute] = newValue;
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

    let editButtonStart = <button onClick={this.togglePieceTools(this.props.data)}
      className="edit-piece-start">edit</button>

    let editButtonDone = <button onClick={this.togglePieceTools(this.props.data)}
      className="edit-piece-done">done</button>

    if (pieceType === 'title') {
      return (
        <Title data={this.props.data}
          editPieceText={this.props.editPieceText}
          showTools={this.props.showTools}
          > {deleteButton} {editButtonStart} </Title>
      );
    }

    if (pieceType === 'navigation') {
      return (
        <Navigation piece={this.props.piece}
          state={this.props.state}
          setState={this.props.setState}
          reorderPieceItems={this.props.reorderPieceItems}
          editButtonStart={editButtonStart}
          editButtonDone={editButtonDone}
          >
          {deleteButton}
        </Navigation>
      );
    }

    if (pieceType === 'banner') {
      return (
        <Banner piece={this.props.piece}
          state={this.props.state}
          setState={this.props.setState}
          changePiece={this.changePiece(this.props.piece)}
          editButtonStart={editButtonStart}
          editButtonDone={editButtonDone}
          deleteButton={deleteButton}
          >
        </Banner>
      );
    }

    if (pieceType === 'content') {
      return (
        <Content piece={this.props.piece}
          state={this.props.state}
          setState={this.props.setState}
          > {deleteButton} {editButtonStart} </Content>
      );
    }

    return (
      <div>
        PIECE (type = {pieceType})
        {this.props.children}
        {deleteButton}
        {editButtonStart}
        {editButtonDone}
      </div>
    );
  }
}

export default Piece;
