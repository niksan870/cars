import React, { Component } from "react";
import SelectListGroup from "../../common/SelectListGroup";
import { getBrands, getModels } from "../../../actions/carsDataActions";
import Select from "react-select";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import options from "./options";

class SmallSearch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      carBrands: [],
      made: ""
    };
  }

  handleChange = selectedOption => {
    this.setState({ [selectedOption.value]: selectedOption.label });
  };

  getCarModels = () => {};

  componentDidMount() {
    this.props.getBrands();
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      carBrands: nextProps.carBrands
    });
  }

  render() {
    let { carBrands } = this.state;
    let carBrandsOptions;

    return (
      <div className="col-lg-3">
        <h1 className="my-4">Търсене</h1>
        <i className="fa fa-car" aria-hidden="true" />
        {/* <Select
          placeholder="Избери валута."
          name="vehicleType"
          value={this.state.vehicleType}
          onChange={this.handleChange}
          options={options.vehicleType}
          multi
        />
        <Select
          placeholder="Избери марка."
          name="made"
          value={this.state.carBrand}
          options={carBrands}
          onChange={this.handleChange}
          multi
        /> */}
        <SelectListGroup
          placeholder="Избери марка."
          name="made"
          value={this.state.carBrand}
          options={carBrands}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

SmallSearch.propTypes = {
  loading: PropTypes.bool,
  getBrands: PropTypes.func,
  carBrands: PropTypes.array
};

const mapStateToProps = state => ({
  loading: state.carAdds.loading,
  getBrands: state.carAdds.getBrands,
  carBrands: state.carsData.carBrands
});

export default connect(
  mapStateToProps,
  { getBrands, getModels }
)(withRouter(SmallSearch));
