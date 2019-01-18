import React from 'react';
import DeleteButton from './deleteButton.js';

const navigation = (props) => {
  const pieceId = props.data.id;
  const showDragAndDrop = props.showTools.reorder;
  const currentlyDragging = props.data.dragging !== null;

  const getDragStart = (index) => {
    return () => {
      props.reorderPieceItems.dragStart(pieceId, index);
    };
  };

  const getDragEnter = (index) => {
    return () => {
      if (!currentlyDragging) {
        return;
      }
      props.reorderPieceItems.dragEnter(pieceId, index);
    };
  };

  let itemSpread = [];

  if (showDragAndDrop) {
    itemSpread.push(null);
    props.data.items.forEach((item) => {
      itemSpread.push(item);
      itemSpread.push(null);
    });
  } else {
    itemSpread = props.data.items;
  }

  let count = -1;

  return (
    <div className="piece navigation">
      <ul>
        {itemSpread.map((text, i) => {
          if (!showDragAndDrop) {
            return (<li key={i} className="item">{text}</li>);
          }
          if (text == null) {
            count += 1;
            return (<li key={i} onDragEnter={getDragEnter(count)} className="drag-space">*</li>);
          }
          return (<li key={i} draggable="true" onDragStart={getDragStart(count)} className="item">{text}</li>);
        })}
      </ul>
      {props.children}
      <DeleteButton showDelete={props.showTools.delete} delete={props.pieceActions.delete}/>
    </div>
  );
};

export default navigation;
