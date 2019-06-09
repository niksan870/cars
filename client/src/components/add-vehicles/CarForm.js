import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import PropTypes from "prop-types";

import { getBrands } from "../../actions/carActions";

import Step1 from "./CarFormSteps/Step1";
import Step2 from "./CarFormSteps/Step2";
import Step3 from "./CarFormSteps/Step3";
import Step4 from "./CarFormSteps/Step4";
import Step5 from "./CarFormSteps/Step5";
import BreadCrumb from "../common/CarFormBreadcrumb";

class CarFrom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStep: 1,
      carBrands: [],
      brand: "",
      carModels: {},
      model: "",
      carGeneration: [],
      generation: "",
      variations: [],
      variation: "",
      showExtendedCarData: false,
      writeReviewsFrom: false,
      finalCar: []
    };
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
    if (name === "brand") {
      this._next();
      this.getCarModel(value);
    } else if (name === "model") {
      this.getCarGeneration(this.state.brand, value);
      this._next();
    } else if (name === "generation") {
      let { brand, model } = this.state;
      this.getCarVariation(brand, model, value);
      this._next();
    } else if (name === "variation") {
      let { brand, model, generation } = this.state;
      this.getFinalCar(brand, model, generation, value);
      this._next();
    }
  };

  _next = () => {
    let currentStep = this.state.currentStep;
    currentStep = currentStep >= 4 ? 5 : currentStep + 1;
    this.setState({
      currentStep: currentStep
    });
  };

  _prev = () => {
    let currentStep = this.state.currentStep;
    currentStep = currentStep <= 1 ? 1 : currentStep - 1;
    this.setState({
      currentStep: currentStep
    });
  };

  previousButton() {
    let currentStep = this.state.currentStep;
    if (currentStep !== 1) {
      return (
        <button
          className="btn btn-secondary"
          type="button"
          onClick={this._prev}
        >
          Previous
        </button>
      );
    }
    return null;
  }

  getFinalCar = (brand, model, generation, variationAndLink) => {
    let variationAndLinkArr = variationAndLink.split("|");
    axios
      .get(
        `/reviews/car/brand/${brand}/model/${model}/generation/${generation}/engine/${
          variationAndLinkArr[1]
        }/urlPiece/${variationAndLinkArr[0]}`
      )
      .then(finalCar =>
        this.setState({
          finalCar: finalCar.data
        })
      )
      .catch(e => console.log(e));
  };

  getCarModel = brand => {
    axios
      .get("/reviews/car/brand/" + brand)
      .then(models =>
        this.setState({
          carModels: models.data
        })
      )
      .catch(e => console.log(e));
  };

  getCarGeneration = (brand, model) => {
    axios
      .get(`/reviews/car/brand/${brand}/model/${model}`)
      .then(generations => {
        this.setState({
          carGeneration: generations.data
        });
      })
      .catch(e => console.log(e));
  };

  getCarVariation = (brand, model, generation) => {
    axios
      .get(
        `/reviews/car/brand/${brand}/model/${model}/generation/${generation}`
      )
      .then(variations => {
        this.setState({
          variations: variations.data[0]
        });
      })
      .catch(e => console.log(e));
  };

  loadMore = e => {
    if (this.state.showExtendedCarData) {
      this.setState({
        showExtendedCarData: false
      });
    } else {
      this.setState({
        showExtendedCarData: true
      });
    }
  };

  writeReviews = e => {
    e.preventDefault();

    if (this.state.writeReviewsFrom) {
      this.setState({
        writeReviewsFrom: false,
        showExtendedCarData: false
      });
    } else {
      this.setState({
        writeReviewsFrom: true,
        showExtendedCarData: false
      });
    }
  };

  componentDidMount() {
    axios
      .get("/reviews/car/")
      .then(brands => {
        this.setState({
          carBrands: brands.data
        });
      })
      .catch(e => console.log(e));
  }

  render() {
    const { currentStep, brand, model, generation, variation } = this.state;
    return (
      <div className="container h-100">
        <div className="row h-100 justify-content-center align-items-center">
          <div className="col-12 text-center p-3 mb-2 bg-light text-white">
            <h1 className="bg-success">Add Car Reviews</h1>
            <BreadCrumb
              currentStep={currentStep}
              brand={brand}
              model={model}
              generation={generation}
              variation={variation}
            />
          </div>

          <form onSubmit={this.handleSubmit}>
            <Step1
              currentStep={this.state.currentStep}
              handleChange={this.handleChange}
              carBrands={this.state.carBrands}
              brand={this.state.brand}
            />
            <Step2
              currentStep={this.state.currentStep}
              handleChange={this.handleChange}
              carModels={this.state.carModels}
              model={this.state.model}
            />
            <Step3
              currentStep={this.state.currentStep}
              handleChange={this.handleChange}
              carGeneration={this.state.carGeneration}
              generation={this.state.generation}
            />
            <Step4
              currentStep={this.state.currentStep}
              handleChange={this.handleChange}
              carVariations={this.state.variations}
              generation={this.state.generation}
            />
            <Step5
              currentStep={this.state.currentStep}
              handleChange={this.handleChange}
              finalCar={this.state.finalCar}
              loadMore={this.loadMore}
              showExtendedCarData={this.state.showExtendedCarData}
              writeReviews={this.writeReviews}
              writeReviewsFrom={this.state.writeReviewsFrom}
            />
            <div className="row" style={{ marginTop: "25px" }}>
              <div className="col-md-6">{this.previousButton()}</div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

CarFrom.propTypes = {
  getBrands: PropTypes.func.isRequired,
  carBrands: PropTypes.array
};

export default connect(
  null,
  { getBrands }
)(CarFrom);
