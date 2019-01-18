import React from 'react';

const banner = (props) => {
  const deletePiece = () => {
    props.pieceActions.delete(props.data.id);
  };

  let className = 'piece banner';

  if (props.data.image) {
    className += ' ' + props.data.image;
  }

  return (
    <div className={className}>
      banner
      <button onClick={deletePiece}>delete</button>
    </div>
  );
};

export default banner;
