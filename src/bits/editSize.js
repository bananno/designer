import React from 'react';

const editSize = (props) => {
  const validateNumber = newValue => {
    return newValue.replace(/\D/g,'');
  }

  const editHeight = (e) => {
    let newValue = e.target.value;
    newValue = validateNumber(newValue);
    props.changePiece('heightInput', newValue);
  }

  const editWidth = (e) => {
    let newValue = e.target.value;
    newValue = validateNumber(newValue);
    props.changePiece('widthInput', newValue);
  }

  const save = () => {
    props.changePiece('height', props.piece.heightInput);
    props.changePiece('width', props.piece.widthInput);
  }

  const reset = () => {
    props.changePiece('heightInput', props.piece.height);
    props.changePiece('widthInput', props.piece.width);
  }

  return (
    <div>
      height: <input className="edit-size" value={props.piece.heightInput} onChange={editHeight}/>
      width: <input className="edit-size" value={props.piece.widthInput} onChange={editWidth}/>
      <button onClick={save}>save</button>
      <button onClick={reset}>cancel</button>
    </div>
  );
};

export default editSize;
