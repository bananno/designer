import React, { Component } from 'react';

class Control extends Component {
  render() {
    var bodyBackgroundColor = this.props.style['body-background-color-input'];
    return (
      <div className="block">
        <h1>Controls</h1>
        <div>
          Body background color:
          <input value={bodyBackgroundColor} onChange={this.props.changeBackgroundColor}/>
          <button onClick={this.props.saveBackgroundColorField}>save</button>
          <button onClick={this.props.resetBackgroundColorField}>cancel</button>
        </div>
        <div>
          Add new piece:
          <select>
            <option value="test">test</option>
          </select>
          <button>add</button>
        </div>
      </div>
    );
  }
}

export default Control;
