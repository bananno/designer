import React from 'react';

const content = (props) => {
  let className = props.classNames;
  let pieceStyle = props.pieceStyle;

  pieceStyle.width = '33%';

  return (
    <div className={className.join(' ')} style={pieceStyle}>
      {
        props.piece.text.map((text, i) => {
          return (
            <p key={i}>
              {text}
            </p>
          );
        })
      }
      {props.deleteButton}
      {props.editButtonStart}
      <div className="piece-tools">
        {props.editBackgroundColorForm}
        {props.editButtonDone}
      </div>
      {props.children}
    </div>
  );
};

export default content;
