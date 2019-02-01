import React, { Component } from 'react';
import Dropdown from '../bits/dropdown.js';
import pieceTypes from '../constants/pieceTypes.js';
import toolList from '../constants/tools.js';
import presets from '../constants/presets.js';

class Control extends Component {
  state = {
    newPieceDropdownChoice: pieceTypes[0],
    loadPresetDropdownChoice: 0,
  };

  mapToolList = (toolInfo, i) => {
    const toggle = () => {
      let newState = this.props.state;
      newState.showTools[toolInfo.name] = !newState.showTools[toolInfo.name];
      this.props.setState(newState);
    };

    let toolId = 'toggleTool-' + toolInfo.name;

    return (
      <div key={i}>
        <input type="checkbox" id={toolId} onChange={toggle}/>
        <label htmlFor={toolId}>{toolInfo.description}</label>
      </div>
    );
  }

  changeNewPieceDropdown = (newValue) => {
    this.setState({
      newPieceDropdownChoice: newValue
    });
  }

  changePresetDropdown = (newValue) => {
    this.setState({
      loadPresetDropdownChoice: newValue
    });
  }

  addNewPiece = () => {
    this.props.addNewPiece({
      type: this.state.newPieceDropdownChoice
    });
  }

  loadPreset = () => {
    this.props.setState({
      pieces: []
    });
  }

  bodyBackgroundColorChange = (e) => {
    let newState = this.props.state;
    newState.canvas['body-background-color-input'] = e.target.value;
    this.props.setState(newState);
  }

  bodyBackgroundColorSave = () => {
    let newState = this.props.state;
    newState.canvas['body-background-color'] = newState.canvas['body-background-color-input'];
    this.props.setState(newState);
  }

  bodyBackgroundColorReset = () => {
    let newState = this.props.state;
    newState.canvas['body-background-color-input'] = newState.canvas['body-background-color'];
    this.props.setState(newState);
  }

  render() {
    var bodyBackgroundColor = this.props.state.canvas['body-background-color-input'];
    return (
      <div id="control">
        <h1>Controls</h1>

        <div>
          Load preset canvas:
          <Dropdown options={presets.map((_, i) => { return 'preset #' + (i + 1); })}
            useIndexAsValue={true}
            value={this.state.loadPresetDropdownChoice}
            onChange={this.changePresetDropdown}/>
          <button onClick={this.loadPreset}>load</button>
        </div>

        {toolList.map(this.mapToolList)}

        <div>
          Body background color:
          <input value={bodyBackgroundColor} onChange={this.bodyBackgroundColorChange}/>
          <button onClick={this.bodyBackgroundColorSave}>save</button>
          <button onClick={this.bodyBackgroundColorReset}>cancel</button>
        </div>

        <div>
          Add new piece:
          <Dropdown options={pieceTypes} value={this.state.newPieceDropdownChoice}
            onChange={this.changeNewPieceDropdown}/>
          <button onClick={this.addNewPiece}>add</button>
        </div>
      </div>
    );
  }
}

export default Control;
