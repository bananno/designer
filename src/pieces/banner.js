import React from 'react';
import ImageSelector from '../bits/imageSelector.js';

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
  }

  return (
    <div className={className}>
      <div>
        background image:
        <ImageSelector current={currentImage} change={changeBackground}/>
      </div>
      {props.children}
    </div>
  );
};

export default banner;
