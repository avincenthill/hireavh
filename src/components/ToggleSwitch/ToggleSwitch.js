import React from "react";
import "./ToggleSwitch.css";

class ToggleSwitch extends React.Component {
  state = {
    checked: this.props.defaultChecked,
  };
  onChange = (e) => {
    this.setState({
      checked: e.target.checked,
    });
    if (typeof this.props.onChange === "function") this.props.onChange();
  };
  render() {
    return (
      <div className="toggle-switch">
        <input
          type="checkbox"
          className="toggle-switch-checkbox"
          id={this.props.id}
          checked={this.props.currentValue}
          defaultChecked={this.props.defaultChecked}
          onChange={this.onChange}
        />
        <label className="toggle-switch-label" htmlFor={this.props.id}>
          <span
            className="toggle-switch-inner"
            data-yes={this.props.text[0]}
            data-no={this.props.text[1]}
          ></span>
        </label>
      </div>
    );
  }
}

export default ToggleSwitch;
