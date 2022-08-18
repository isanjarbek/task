import { types } from "../actionTypes";
import { ActionType } from "redux-promise-middleware";

const initialState = {
  loading: true,
  error: null,
  data: {},
};

const map = {
  [`${types.GET_PAYMENT}_${ActionType.Pending}`]: (state) => ({
    ...state,
    loading: true,
  }),
  [`${types.GET_PAYMENT}_${ActionType.Rejected}`]: (state, { payload }) => ({
    ...state,
    loading: false,
    error: payload,
  }),
  [`${types.GET_PAYMENT}_${ActionType.Fulfilled}`]: (
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

export const paymentReducer = (state = initialState, action) => {
  return (map[action.type] && map[action.type](state, action)) || state;
};
