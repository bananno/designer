import React, { Component } from 'react';
import Title from '../pieces/title.js';
import Navigation from '../pieces/navigation.js';
import Banner from '../pieces/banner.js';
import Content from '../pieces/content.js';
import DeleteButton from '../bits/deleteButton.js';

class Piece extends Component {
  state = {
    showEditTools: false,
    backgroundColorInput: this.props.piece.backgroundColor,
  };

  showEditTools = () => {
    this.setState({
      showEditTools: true
    });
  };

  hideEditTools = () => {
    this.setState({
      showEditTools: false
    });
  };

  changePiece = (attribute, newValue) => {
    let newState = this.props.state;

    newState.pieces = newState.pieces.map(thisPiece => {
      if (thisPiece === this.props.piece) {
        thisPiece[attribute] = newValue;
      }
      return thisPiece;
    });

    this.props.setState(newState);
  };

  render() {
    const pieceType = this.props.data.type;

    let deleteButton = <DeleteButton piece={this.piece} state={this.props.state}
      setState={this.props.setState}/>

    let editButtonStart = <button onClick={this.showEditTools}
      className="edit-piece-start">edit</button>

    let editButtonDone = <button onClick={this.hideEditTools}
      className="edit-piece-done">done</button>

    let classNames = ['piece', pieceType];

    classNames.push('edit-piece-' + this.state.showEditTools);

    if (pieceType === 'title') {
      return (
        <Title piece={this.props.piece}
          editPieceText={this.props.editPieceText}
          editButtonStart={editButtonStart}
          editButtonDone={editButtonDone}
          deleteButton={deleteButton}
          classNames={classNames}
          >
        </Title>
      );
    }

    if (pieceType === 'navigation') {
      return (
        <Navigation piece={this.props.piece}
          state={this.props.state}
          setState={this.props.setState}
          changePiece={this.changePiece}
          reorderPieceItems={this.props.reorderPieceItems}
          editButtonStart={editButtonStart}
          editButtonDone={editButtonDone}
          classNames={classNames}
          >
          {deleteButton}
        </Navigation>
      );
    }

    if (pieceType === 'banner') {
      const changeBackgroundColorInput = (e) => {
        this.setState({
          backgroundColorInput: e.target.value
        });
      };

      const saveBackgroundColor = () => {
        this.changePiece('backgroundColor', this.state.backgroundColorInput);
      };

      return (
        <Banner piece={this.props.piece}
          state={this.props.state}
          setState={this.props.setState}
          changePiece={this.changePiece}
          editButtonStart={editButtonStart}
          editButtonDone={editButtonDone}
          deleteButton={deleteButton}
          classNames={classNames}
          backgroundColorInput={this.state.backgroundColorInput}
          changeBackgroundColorInput={changeBackgroundColorInput}
          saveBackgroundColor={saveBackgroundColor}
          >
        </Banner>
      );
    }

    if (pieceType === 'content') {
      return (
        <Content piece={this.props.piece}
          state={this.props.state}
          setState={this.props.setState}
          classNames={classNames}
          editButtonStart={editButtonStart}
          editButtonDone={editButtonDone}
          deleteButton={deleteButton}
          >
        </Content>
      );
    }

    return (
      <div classNames={classNames.join(' ')}>
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
