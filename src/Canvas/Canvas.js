import React, { Component } from 'react';

class Canvas extends Component {
  render() {
    var bodyBackgroundColor = this.props.style['body-background-color'];
    return (
      <div className="block" style={{"backgroundColor": bodyBackgroundColor}}>
        <div>MAIN TITLE</div>
        <div>SOME CONTENT</div>
      </div>
    );
  }
}

export default Canvas;
