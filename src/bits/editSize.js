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

  return (
    <div>
      height:
      <input className="edit-size"
        value={props.piece.heightInput}
        onChange={editHeight}/>
      width:
      <input className="edit-size"
        value={props.piece.widthInput}
        onChange={editWidth}/>
      <button>save</button>
      <button>cancel</button>
    </div>
  );
};

export default editSize;
