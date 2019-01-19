import React from 'react';
import ImageSelector from '../bits/imageSelector.js';

const banner = (props) => {
  let className = 'piece banner';
  let currentImage = props.data.image;

  if (currentImage) {
    className += ' ' + currentImage;
  }

  const changeBackground = (newValue) => {
    console.log('new background: ' + newValue);
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
