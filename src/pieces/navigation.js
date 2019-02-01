import React from 'react';

const navigation = (props) => {
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

  const togglePieceTools = () => {
    let newState = props.state;

    newState.pieces = newState.pieces.map(thisPiece => {
      if (thisPiece === props.piece) {
        thisPiece.showTools = !thisPiece.showTools;
      }
      return thisPiece;
    });

    props.setState(newState);
  };

  const getPieceTools = () => {
    if (!props.piece.showTools) {
      return (
        <button onClick={togglePieceTools} className="edit-piece">edit navigation</button>
      );
    }

    return (
      <div className="piece-tools">
        <button onClick={togglePieceTools}>done</button>
      </div>
    );
  };

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
      {getPieceTools()}
      {props.children}
    </div>
  );
};

export default navigation;
