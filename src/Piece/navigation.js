import React from 'react';

const navigation = (props) => {
  const pieceId = props.data.id;

  const getDragStart = (index) => {
    return () => {
      props.reorderPieceItems.dragStart(pieceId, index);
    };
  };

  const getDragEnter = (index) => {
    return () => {
      props.reorderPieceItems.dragEnter(pieceId, index);
    };
  };

  let itemSpread = [null];

  props.data.items.forEach((item) => {
    itemSpread.push(item);
    itemSpread.push(null);
  });

  let count = -1;

  return (
    <div className="piece navigation">
      <ul>
        {itemSpread.map((text, i) => {
          if (text == null) {
            count += 1;
            return (<li key={i} onDragEnter={getDragEnter(count)}>*</li>);
          }
          return (<li key={i} draggable="true" onDragStart={getDragStart(count)}>{text}</li>);
        })}
      </ul>
    </div>
  );
};

export default navigation;
