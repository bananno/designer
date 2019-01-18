import React from 'react';

const navigation = (props) => {
  return (
    <div className="piece navigation">
      <ul>
        {props.data.items.map((text, i) => {
          return (<li key={i}>{text}</li>);
        })}
      </ul>
    </div>
  );
};

export default navigation;
