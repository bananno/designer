
function createPiece(newPiece) {
  newPiece = newPiece || {};

  if (newPiece.type == null) {
    newPiece.type = 'other';
  } else if (newPiece.type === 'title') {
    newPiece.text = newPiece.text || 'TITLE';
    newPiece.textInput = newPiece.text;
    newPiece.editing = false;
  } else if (newPiece.type === 'navigation') {
    newPiece.items = newPiece.items || [];
    newPiece.dragging = null;
  } else if (newPiece.type === 'banner') {
    newPiece.image = newPiece.image || null;
  }

  return newPiece;
}

export default createPiece;
