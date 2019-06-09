import React, { Component } from "react";

class Step2 extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let options = [];
    if (this.props.carModels.length > 0) {
      options = this.props.carModels.map(model => {
        return (
          <option
            key={model._id}
            value={model.title}
            style={{ backgroundImage: `url(${model.logo})` }}
          >
            {model.title}
          </option>
        );
      });
    }

    options.unshift(
      <option key="0" value="">
        ----
      </option>
    );

    if (this.props.currentStep !== 2) {
      return null;
    }

    return (
      <div className="form-group">
        <select
          value={this.props.model}
          name="model"
          onChange={this.props.handleChange}
        >
          {options}
        </select>
      </div>
    );
  }
}

export default Step2;
