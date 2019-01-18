import React from 'react';

const title = (props) => {
  const togglePieceEditing = () => {
    props.editPieceText.toggleView(props.data.id);
  };

  const editPieceText = (e) => {
    let newText = e.target.value;
    props.editPieceText.changeInput(props.data.id, newText);
  }

  const savePieceText = () => {
    props.editPieceText.clickSave(props.data.id);
  }

  if (props.data.editing) {
    return (
      <div className="piece title">
        <div className="edit">
          <input value={props.data.textInput} onChange={editPieceText}/>
        </div>
        <button onClick={savePieceText}>save</button>
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
