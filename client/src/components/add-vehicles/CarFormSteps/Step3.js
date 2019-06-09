import React, { Component } from "react";

class Step3 extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let options = [];

    if (this.props.carGeneration) {
      options = this.props.carGeneration.map(generation => {
        return (
          <option
            key={generation.generations[0][0].name}
            value={generation.generations[0][0].name}
          >
            {generation.generations[0][0].name}
          </option>
        );
      });
      // console.log(this.props.carGeneration);
    }
    options.unshift(
      <option key="0" value="">
        ----
      </option>
    );

    if (this.props.currentStep !== 3) {
      return null;
    }

    return (
      <select
        value={this.props.generation}
        name="generation"
        onChange={this.props.handleChange}
      >
        {options}
      </select>
    );
  }
}
export default Step3;
