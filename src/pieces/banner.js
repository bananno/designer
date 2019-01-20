import React from 'react';
import ImageSelector from '../bits/imageSelector.js';
import EditSize from '../bits/editSize.js';

const banner = (props) => {
  let className = 'piece banner';
  let currentImage = props.piece.image;

  if (currentImage) {
    className += ' ' + currentImage;
  }

  const changeBackground = (newValue) => {
    let newState = props.state;

    newState.pieces = newState.pieces.map(thisPiece => {
      if (thisPiece === props.piece) {
        thisPiece.image = newValue;
      }
      return thisPiece;
    });

    props.setState(newState);
  };

  const changePiece = (attribute, newValue) => {
    let newState = props.state;

    newState.pieces = newState.pieces.map(thisPiece => {
      if (thisPiece === props.piece) {
        thisPiece[attribute] = newValue;
      }
      return thisPiece;
    });

    props.setState(newState);
  };

  const togglePieceTools = () => {
    let newState = props.state;

    newState.pieces = newState.pieces.map(thisPiece => {
      if (thisPiece === props.piece) {
        thisPiece.showTools = !thisPiece.showTools;
      }
      return thisPiece;
    });

    props.setState(newState);
  };

  const getPieceTools = () => {
    if (!props.piece.showTools) {
      return (
        <button onClick={togglePieceTools} className="edit-piece">edit banner</button>
      );
    }

    return (
      <div className="piece-tools">
        background image:
        <ImageSelector current={currentImage} change={changeBackground}/>
        <br/>
        size:
        <EditSize piece={props.piece} changePiece={changePiece}/>
        <br/>
        <button onClick={togglePieceTools}>done</button>
      </div>
    );
  };

  let pieceStyle = {};

  pieceStyle['width'] = props.piece.width + 'px';
  pieceStyle['height'] = props.piece.height + 'px';

  return (
    <div className={className}>
      <div style={pieceStyle}>
        {getPieceTools()}
      </div>
      {props.children}
    </div>
  );
};

export default banner;
