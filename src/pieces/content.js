import React from 'react';

const content = (props) => {
  let className = props.classNames;
  let pieceStyle = {};

  return (
    <div className={className.join(' ')} style={pieceStyle}>
      CONTENT HERE
      {props.deleteButton}
      {props.editButtonStart}
      <div className="piece-tools">
        {props.editButtonDone}
      </div>
      {props.children}
    </div>
  );
};

export default content;
