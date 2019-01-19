
import bannerBgImages from '../constants/bannerBgImages.js';

function createPiece(newPiece) {
  newPiece = newPiece || {};

  if (newPiece.type == null) {
    newPiece.type = 'other';
  } else if (newPiece.type === 'title') {
    newPiece.text = newPiece.text || 'TITLE';
    newPiece.textInput = newPiece.text;
    newPiece.editing = false;
  } else if (newPiece.type === 'navigation') {
    newPiece.items = newPiece.items || ['Link Here'];
    newPiece.dragging = null;
  } else if (newPiece.type === 'banner') {
    newPiece.image = newPiece.image || bannerBgImages[0];
  }

  return newPiece;
}

export default createPiece;
