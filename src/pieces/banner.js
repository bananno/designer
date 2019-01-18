import React from 'react';

const banner = (props) => {
  let className = 'piece banner';

  if (props.data.image) {
    className += ' ' + props.data.image;
  }

  return (
    <div className={className}>
      banner
      <button onClick={props.pieceActions.delete}>delete</button>
    </div>
  );
};

export default banner;
