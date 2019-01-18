import React from 'react';

const deleteButton = (props) => {
  if (!props.showDelete) {
    return null;
  }

  return (
    <button onClick={props.delete}>delete</button>
  );
};

export default deleteButton;
