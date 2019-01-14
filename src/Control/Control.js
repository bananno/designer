import React, { Component } from 'react';

class Control extends Component {
  render() {
    return (
      <div className="block">
        <h1>Controls</h1>
        <div>
          Body background color:
          <input value="blue"/>
        </div>
      </div>
    );
  }
}

export default Control;
