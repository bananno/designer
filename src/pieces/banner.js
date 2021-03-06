import React from 'react';
import ImageSelector from '../bits/imageSelector.js';
import EditSize from '../bits/editSize.js';

const banner = (props) => {
  let className = props.classNames;
  let currentImage = props.piece.image;

  if (currentImage) {
    className.push(currentImage);
  }

  const changeImage = (newValue) => {
    props.changePiece('image', newValue);
  };

  let pieceStyle = props.pieceStyle;

  pieceStyle['width'] = props.piece.width + 'px';
  pieceStyle['height'] = props.piece.height + 'px';

  return (
    <div className={className.join(' ')} style={pieceStyle}>
      {props.deleteButton}
      {props.editButtonStart}
      <div className="piece-tools">
        background image:
        <ImageSelector value={currentImage} onChange={changeImage}/>
        <br/>
        {
          currentImage === 'none'
          ? props.editBackgroundColorForm
          : null
        }
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
