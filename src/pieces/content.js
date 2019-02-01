import React from 'react';

const content = (props) => {
  let className = props.classNames;

  const changePiece = (attribute, newValue) => {
    let newState = props.state;

    newState.pieces = newState.pieces.map(thisPiece => {
      if (thisPiece === props.piece) {
        thisPiece[attribute] = newValue;
      }
      return thisPiece;
    });

    props.setState(newState);
  };

  const togglePieceTools = () => {
    let newState = props.state;

    newState.pieces = newState.pieces.map(thisPiece => {
      if (thisPiece === props.piece) {
        thisPiece.showTools = !thisPiece.showTools;
      }
      return thisPiece;
    });

    props.setState(newState);
  };

  const getPieceTools = () => {
    if (!props.piece.showTools) {
      return (
        <button onClick={togglePieceTools} className="edit-piece">edit content</button>
      );
    }

    return (
      <div className="piece-tools">
        <button onClick={togglePieceTools}>done</button>
      </div>
    );
  };

  let pieceStyle = {};

  return (
    <div className={className.join(' ')}>
      <div style={pieceStyle}>
        {getPieceTools()}
      </div>
      CONTENT
      {props.children}
    </div>
  );
};

export default content;
