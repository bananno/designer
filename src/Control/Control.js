import React, { Component } from 'react';

class Control extends Component {
  getToggleTool = (toolName) => {
    return () => {
      let newState = this.props.state;
      newState.showTools[toolName] = !newState.showTools[toolName];
      this.props.setState(newState);
    }
  }

  render() {
    var bodyBackgroundColor = this.props.style['body-background-color-input'];
    return (
      <div className="block">
        <h1>Controls</h1>

        <div>
          <input type="checkbox" id="toggleToolReorder" onChange={this.getToggleTool('reorder')}/>
          <label htmlFor="toggleToolReorder">drag and drop to reorder</label>
        </div>

        <div>
          <input type="checkbox" id="toggleToolDelete" onChange={this.getToggleTool('delete')}/>
          <label htmlFor="toggleToolDelete">buttons to delete</label>
        </div>

        <div>
          Body background color:
          <input value={bodyBackgroundColor} onChange={this.props.changeBackgroundColor}/>
          <button onClick={this.props.saveBackgroundColorField}>save</button>
          <button onClick={this.props.resetBackgroundColorField}>cancel</button>
        </div>

        <div>
          Add new piece:
          <select id="addNewPieceType">
            {this.props.pieceTypes.map((pieceType, i) => {
              return <option value={pieceType} key={i}>{pieceType}</option>;
            })}
          </select>
          <button onClick={this.props.addNewPiece}>add</button>
        </div>
      </div>
    );
  }
}

export default Control;
