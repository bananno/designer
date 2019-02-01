import React, { Component } from 'react';

class Section extends Component {
  state = {
    showEditTools: false
  };

  showEditTools = () => {
    this.setState({
      showEditTools: true
    });
  };

  hideEditTools = () => {
    this.setState({
      showEditTools: false
    });
  };

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
          <button onClick={this.hideEditTools} className="done-button">done</button>
        </div>
        {this.props.children}
      </div>
    );
  }
}

export default Section;
