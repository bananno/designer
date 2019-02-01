import React from 'react';
import Dropdown from '../bits/dropdown.js';

const navigation = (props) => {
  let className = props.classNames;
  const pieceId = props.piece.id;
  const showDragAndDrop = props.state.showTools.reorder;
  const currentlyDragging = props.piece.dragging !== null;

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

  const changeDisplay = (newValue) => {
    props.changePiece('display', newValue);
  };

  let itemSpread = [];

  if (showDragAndDrop) {
    itemSpread.push(null);
    props.piece.items.forEach((item) => {
      itemSpread.push(item);
      itemSpread.push(null);
    });
  } else {
    itemSpread = props.piece.items;
  }

  let count = -1;

  let pieceStyle = {};

  if (props.piece.display == 'inline') {
    pieceStyle.display = 'inline-block';
  }

  return (
    <div className={className.join(' ')} style={pieceStyle}>
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
        <li>
          {props.editButtonStart}
        </li>
      </ul>
      <div className="piece-tools">
        Display:
        <Dropdown options={['block','inline']} value={props.piece.display} onChange={changeDisplay}/>
        <br/>
        {props.editButtonDone}
      </div>
      {props.children}
    </div>
  );
};

export default navigation;
