import React from 'react';

const navigation = (props) => {
  const onDragStart = () => {
    props.reorderPieceItems.dragStart();
  };

  const onDragEnter = () => {
    props.reorderPieceItems.dragEnter();
  };

  let itemSpread = [null];

  props.data.items.forEach((item) => {
    itemSpread.push(item);
    itemSpread.push(null);
  });

  return (
    <div className="piece navigation">
      <ul>
        {itemSpread.map((text, i) => {
          if (text == null) {
            return (<li key={i} onDragEnter={onDragEnter}>*</li>);
          }
          return (<li key={i} draggable="true" onDragStart={onDragStart}>{text}</li>);
        })}
      </ul>
    </div>
  );
};

export default navigation;
