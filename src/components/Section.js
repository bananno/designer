import React, { Component } from 'react';

class Section extends Component {
  state = {
    showEditTools: false,
    backgroundColorInput: this.props.section.backgroundColor || '',
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
    });
  }

  editBackgroundColorInput = (e) => {
    this.setState({
      backgroundColorInput: e.target.value
    });
  }

  saveNewBackgroundColor = () => {
    this.changeSectionState('backgroundColor', this.state.backgroundColorInput);
  }

  render() {
    let className = 'canvas-section editing-' + this.state.showEditTools;

    let sectionStyle = {};

    if (this.props.section.backgroundColor) {
      sectionStyle.backgroundColor = this.props.section.backgroundColor;
    }

    return (
      <div className={className} style={sectionStyle}>
        <div>
          <button onClick={this.showEditTools} className="edit-start-button">edit section</button>
        </div>
        <div className="edit-box">
          <div>
            Background color:
            <input value={this.state.backgroundColorInput} onChange={this.editBackgroundColorInput}/>
            <button onClick={this.saveNewBackgroundColor}>save</button>
          </div>
          <button onClick={this.hideEditTools} className="done-button">done</button>
        </div>
        {this.props.children}
      </div>
    );
  }
}

export default Section;
