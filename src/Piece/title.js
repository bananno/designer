import React from 'react';

const title = (props) => {
  const togglePieceEditing = () => {
    props.togglePieceEditing(props.data.id);
  };

  if (props.data.editing) {
    return (
      <div className="piece title">
        <div className="edit">
          <input value={props.data.text}/>
        </div>
        <button onClick={togglePieceEditing}>cancel</button>
      </div>
    );
  }

  return (
    <div className="piece title">
      <div className="display">
        {props.data.text}
      </div>
      <span className="edit-link" onClick={togglePieceEditing}>edit</span>
    </div>
  );
};

export default title;
