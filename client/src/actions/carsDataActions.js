import axios from "axios";
import {
  GET_ERRORS,
  CARS_DATA_GET_BRANDS,
  CARS_DATA_GET_MODELS,
  VEHICLES_LOADING
} from "./types";

//Get all car Brands
export const getBrands = () => dispatch => {
  axios
    .get("/reviews/car/")
    .then(res => {
      dispatch({
        type: CARS_DATA_GET_BRANDS,
        payload: res.data
      });
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.data
      })
    );
};

//Get all car Models
export const getModels = brand => dispatch => {
  axios
    .get("/reviews/car/brand/" + brand)
    .then(res => {
      dispatch({
        type: CARS_DATA_GET_MODELS,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err.data
      });
    });
};

// Profile loading
export const setVehiclesLoading = () => {
  return {
    type: VEHICLES_LOADING
  };
};
