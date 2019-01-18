import React from 'react';
import DeleteButton from './deleteButton.js';

const banner = (props) => {
  let className = 'piece banner';

  if (props.data.image) {
    className += ' ' + props.data.image;
  }

  return (
    <div className={className}>
      <DeleteButton showDelete={props.showTools.delete} delete={props.pieceActions.delete}/>
    </div>
  );
};

export default banner;
