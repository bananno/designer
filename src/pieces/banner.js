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
    props.changePiece('image', newValue);
  };

  let pieceStyle = {};

  pieceStyle['width'] = props.piece.width + 'px';
  pieceStyle['height'] = props.piece.height + 'px';

  return (
    <div className={className} style={pieceStyle}>
      {props.deleteButton}
      {props.editButtonStart}
      <div className="piece-tools">
        background image:
        <ImageSelector current={currentImage} change={changeBackground}/>
        <br/>
        size:
        <EditSize piece={props.piece} changePiece={props.changePiece}/>
        <br/>
        {props.editButtonDone}
      </div>
      {props.children}
    </div>
  );
};

export default banner;
