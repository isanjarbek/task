import { types } from "../actionTypes";
import { ActionType } from "redux-promise-middleware";

const initialState = {
  loading: true,
  error: null,
  data: {},
};

const map = {
  [`${types.GET_PRODUCTS}_${ActionType.Pending}`]: (state) => ({
    ...state,
    loading: true,
  }),
  [`${types.GET_PRODUCTS}_${ActionType.Rejected}`]: (state, { payload }) => ({
    ...state,
    loading: false,
    error: payload,
  }),
  [`${types.GET_PRODUCTS}_${ActionType.Fulfilled}`]: (
    state,
    { payload: { data } }
  ) => {
    return {
      ...state,
      loading: false,
      data: data,
    };
  },
};

export const productReducer = (state = initialState, action) => {
  return (map[action.type] && map[action.type](state, action)) || state;
};
