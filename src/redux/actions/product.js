import axios from "axios";
import { baseURL } from "@constants/url";
import { types } from "../actionTypes";

export const getProducts = () => (dispatch) => {
  dispatch({
    type: types.GET_PRODUCTS,
    payload: axios.get(`${baseURL}/products/`),
  });
};
