import React from 'react';

const editSize = (props) => {
  return (
    <div>
      height: <input className="edit-size" value={props.height}/>
      width: <input className="edit-size" value={props.width}/>
      <button>save</button>
      <button>cancel</button>
    </div>
  );
};

export default editSize;
