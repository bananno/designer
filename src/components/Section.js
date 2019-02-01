import React, { Component } from 'react';

class Section extends Component {
  state = {
  };

  render() {
    return (
      <div className="canvas-section">
        {this.props.children}
      </div>
    );
  }
}

export default Section;
