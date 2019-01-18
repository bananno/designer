import React from 'react';

const title = (props) => {
  const editTextStart = () => {
    props.editPieceText.toggleView(props.data.id, true);
  };

  const editTextCancel = () => {
    props.editPieceText.toggleView(props.data.id, false);
  };

  const editTextTypeInput = (e) => {
    let newText = e.target.value;
    props.editPieceText.changeInput(props.data.id, newText);
  }

  const editTextSave = () => {
    props.editPieceText.clickSave(props.data.id);
  }

  if (props.data.editing) {
    return (
      <div className="piece title">
        <div className="edit">
          <input onChange={editTextTypeInput} value={props.data.textInput}/>
        </div>
        <button onClick={editTextSave}>save</button>
        <button onClick={editTextCancel}>cancel</button>
      </div>
    );
  }

  return (
    <div className="piece title">
      <div className="display">
        {props.data.text}
      </div>
      <span onClick={editTextStart} className="edit-link">edit</span>
    </div>
  );
};

export default title;
