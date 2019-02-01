import React from 'react';

const title = (props) => {
  let className = props.classNames;

  const editTextStart = () => {
    props.editPieceText.toggleView(props.piece.id, true);
  };

  const editTextCancel = () => {
    props.editPieceText.toggleView(props.piece.id, false);
  };

  const editTextTypeInput = (e) => {
    let newText = e.target.value;
    props.editPieceText.changeInput(props.piece.id, newText);
  }

  const editTextSave = () => {
    props.editPieceText.clickSave(props.piece.id);
  }

  if (props.piece.editing) {
    return (
      <div className={className.join(' ')}>
        <div className="edit">
          <input onChange={editTextTypeInput} value={props.piece.textInput}/>
        </div>
        <button onClick={editTextSave}>save</button>
        <button onClick={editTextCancel}>cancel</button>
      </div>
    );
  }

  return (
    <div className={className.join(' ')}>
      <div className="display">
        {props.piece.text}
      </div>
      <span onClick={editTextStart} className="edit-link">edit</span>
      {props.deleteButton}
    </div>
  );
};

export default title;
