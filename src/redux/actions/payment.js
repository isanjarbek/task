import axios from "axios";
import { baseURL } from "@constants/url";
import { types } from "../actionTypes";

export const getPayments = () => (dispatch) => {
  dispatch({
    type: types.GET_PAYMENT,
    payload: axios.get(`${baseURL}/payments/`),
  });
};
