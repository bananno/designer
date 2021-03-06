import React, { Component } from 'react';

class Section extends Component {
  state = {
    showEditTools: false,
    backgroundColorInput: this.props.section.backgroundColor || '',
    widthInput: this.props.section.width || '100%',
  }

  changeSectionState = (attribute, newValue) => {
    let newState = this.props.state;

    newState.pieces = newState.pieces.map(thisSection => {
      if (thisSection === this.props.section) {
        thisSection[attribute] = newValue;
      }
      return thisSection;
    });

    this.props.setState(newState);
  }

  showEditTools = () => {
    this.setState({
      showEditTools: true,
    });
  }

  hideEditTools = () => {
    this.setState({
      showEditTools: false,
      backgroundColorInput: this.props.section.backgroundColor || '',
      widthInput: this.props.section.width || '100%',
    });
  }

  editBackgroundColorInput = (e) => {
    this.setState({
      backgroundColorInput: e.target.value
    });
  }

  editWidthInput = (e) => {
    this.setState({
      widthInput: e.target.value
    });
  }

  saveNewBackgroundColor = () => {
    this.changeSectionState('backgroundColor', this.state.backgroundColorInput);
  }

  saveNewWidth = () => {
    this.changeSectionState('width', this.state.widthInput);
  }

  render() {
    let className = 'canvas-section editing-' + this.state.showEditTools;

    let sectionStyle = {};
    let innerStyle = {};

    if (this.props.section.backgroundColor) {
      sectionStyle.backgroundColor = this.props.section.backgroundColor;
    }

    innerStyle.width = this.props.section.width;

    return (
      <div className={className} style={sectionStyle}>
        <div>
          <button onClick={this.showEditTools} className="edit-start-button">edit section</button>
        </div>
        <div className="edit-box">
          <div>
            Section background color:
            <input value={this.state.backgroundColorInput} onChange={this.editBackgroundColorInput}/>
            <button onClick={this.saveNewBackgroundColor}>save</button>
          </div>
          <div>
            Section width:
            <input value={this.state.widthInput} onChange={this.editWidthInput}/>
            <button onClick={this.saveNewWidth}>save</button>
          </div>
          <button onClick={this.hideEditTools} className="done-button">done</button>
        </div>
        <div className="canvas-section-inner" style={innerStyle}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Section;
