import React, { Component } from "react";

class Step1 extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const options = this.props.carBrands.map(brand => (
      <option key={brand._id} value={brand.title}>
        {brand.title}
      </option>
    ));

    if (this.props.currentStep !== 1) {
      // Prop: The current step
      return null;
    }
    options.unshift(
      <option key="0" value="">
        ----
      </option>
    );

    // The markup for the Step 1 UI
    return (
      <div className="form-group">
        <select
          value={this.props.brand}
          name="brand"
          onChange={this.props.handleChange}
        >
          {options}
        </select>
      </div>
    );
  }
}
export default Step1;
