import React, { Component } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class viewCars extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchShowCars: [],
      searchShowCarsItems: []
    };
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
    this.setState({ searchShowCars: nextProps.searchShowCars });
  }

  render() {
    let content;
    if (this.state.searchShowCars) {
      // console.log(this.state.searchShowCars);
      content = this.state.searchShowCars.map((car, index) => {
        const b64 = new Buffer(car.images[0].data).toString("base64");
        return (
          <div key={index} className="col-lg-4 col-md-6 mb-4">
            <div className="card h-100">
              <Link className="nav-link" to={`cars/${car.handle}`}>
                <img
                  src={`data:${car.images[0].contentType};base64,${b64}`}
                  alt="#"
                />
              </Link>
              <div className="card-body">
                <h4 className="card-title">
                  <Link className="nav-link" to={`cars/${car.handle}`}>
                    {`${car.made} ${car.model} ${car.modification}`}
                  </Link>
                </h4>
                <h5>{`${car.price} ${car.currency}`}</h5>
                <p className="card-text">asdasd</p>
              </div>
              <div className="card-footer">
                <small className="text-muted">asdasd</small>
              </div>
            </div>
          </div>
        );
      });
    } else {
      // content = loader
    }

    return <div className="row">{content}</div>;
  }
}
viewCars.propTypes = {
  loading: PropTypes.bool,
  searchShowCars: PropTypes.array
};

const mapStateToProps = state => ({
  loading: state.carAdds.loading,
  searchShowCars: state.carAdds.searchShowCars
});

export default connect(
  mapStateToProps,
  {}
)(withRouter(viewCars));
