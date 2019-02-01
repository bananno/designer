import bannerBgImages from '../constants/bannerBgImages.js';

const loremIpsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ' +
  'hendrerit id tortor eget feugiat. Fusce at urna tincidunt, gravida tellus eget, egestas ' +
  'nulla. Praesent laoreet augue purus, nec ornare. Vivamus eu dapibus sem, at porta magna.';

function createPiece(newPiece) {
  newPiece = {...(newPiece || {})};

  if (newPiece.type == null) {
    newPiece.type = 'other';
  } else if (newPiece.type === 'section') {
    newPiece.width = '80%';
  } else if (newPiece.type === 'title') {
    newPiece.text = newPiece.text || 'TITLE';
    newPiece.textInput = newPiece.text;
    newPiece.editing = false;
  } else if (newPiece.type === 'navigation') {
    newPiece.items = newPiece.items || ['Link Here'];
    newPiece.dragging = null;
  } else if (newPiece.type === 'banner') {
    newPiece.image = newPiece.image || bannerBgImages[0];
    newPiece.width = 800;
    newPiece.height = 200;
    newPiece.widthInput = newPiece.width;
    newPiece.heightInput = newPiece.height;
    newPiece.showTools = false;
  } else if (newPiece.type === 'content') {
    newPiece.text = [].concat(newPiece.text || [loremIpsum]);
  }

  return newPiece;
}

export default createPiece;
