import React from 'react';

const banner = (props) => {
  const showDelete = props.showTools.delete;

  let className = 'piece banner';

  if (props.data.image) {
    className += ' ' + props.data.image;
  }

  return (
    <div className={className}>
      {showDelete ? <button onClick={props.pieceActions.delete}>delete</button> : null}
    </div>
  );
};

export default banner;
