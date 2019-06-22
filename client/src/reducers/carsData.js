import { CARS_DATA_GET_BRANDS, CARS_DATA_GET_MODELS } from "../actions/types";

const initialState = {
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case CARS_DATA_GET_BRANDS:
      return {
        ...state,
        carBrands: action.payload,
        loading: false
      };
    case CARS_DATA_GET_MODELS:
      return {
        ...state,
        carModels: action.payload,
        loading: false
      };
    default:
      return state;
  }
}
