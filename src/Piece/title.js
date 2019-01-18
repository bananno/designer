import React from 'react';

const title = (props) => {
  return (
    <div className="piece title">
      <div className="display">
        {props.data.text}
      </div>
      <div className="edit">
        <input/>
      </div>
    </div>
  );
};

export default title;
