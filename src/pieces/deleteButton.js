import React from 'react';

const deleteButton = (props) => {
  if (!props.state.showTools.delete) {
    return null;
  }

  const deletePiece = () => {
    let newState = props.state;

    newState.pieces = newState.pieces.filter(thisPiece => {
      return thisPiece !== props.piece;
    });

    props.setState(newState);
  };

  return (
    <button onClick={deletePiece}>delete</button>
  );
};

export default deleteButton;
