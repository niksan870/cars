import React, { Component } from "react";

class Step4 extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    if (this.props.currentStep !== 4) {
      return null;
    }
    let options = [];

    if (this.props.carVariations.modification) {
      options = this.props.carVariations.modification.map(modification => {
        return (
          <option
            key={modification[0].link}
            value={
              modification[0].link.substr(
                modification[0].link.lastIndexOf("/") + 1
              ) +
              "|" +
              modification[0].title
            }
          >
            {modification[0].title}
          </option>
        );
      });
    }

    options.unshift(
      <option key="0" value="">
        ----
      </option>
    );

    return (
      <select
        value={this.props.variation}
        name="variation"
        onChange={this.props.handleChange}
      >
        {options}
      </select>
    );
  }
}
export default Step4;
