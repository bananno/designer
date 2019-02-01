import React from 'react';

const content = (props) => {
  let className = props.classNames;
  let pieceStyle = {};

  pieceStyle.width = '33%';

  return (
    <div className={className.join(' ')} style={pieceStyle}>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus hendrerit id tortor
        eget feugiat. Fusce at urna tincidunt, gravida tellus eget, egestas nulla. Praesent
        laoreet augue purus, nec ornare libero finibus a. Vivamus eu dapibus sem, at porta magna.
      </p>
      {props.deleteButton}
      {props.editButtonStart}
      <div className="piece-tools">
        {props.editButtonDone}
      </div>
      {props.children}
    </div>
  );
};

export default content;
