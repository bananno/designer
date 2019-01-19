import React from 'react';
import ImageSelector from '../bits/imageSelector.js';

const banner = (props) => {
  let className = 'piece banner';

  if (props.data.image) {
    className += ' ' + props.data.image;
  }

  return (
    <div className={className}>
      <div>
        background image:
        <ImageSelector/>
      </div>
      {props.children}
    </div>
  );
};

export default banner;
