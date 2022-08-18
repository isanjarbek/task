import axios from "axios";
import toast from "react-hot-toast";
import { types } from "../actionTypes";
import { baseURL } from "@constants/url";

export const pay = (payload) => (dispatch) => {
  dispatch({
    type: types.PAY,
    payload: axios
      .post(`${baseURL}/pay`, payload, {
        auth: {
          username: "usr",
          password: "pwd",
        },
      })
      // .then(({ value, action }) => {
      //   if (action.type === `${types.PAY}_${ActionType.Fulfilled}`) {
      //     toast.success('To'lov muvaffaqiyatli amalga oshdi')
      //   }
      // })
      .then((response) => {
        if (response.status === 200) {
          toast.success("To'lov muvaffaqiyatli amalga oshdi");
          window.location.reload();
        }
      })
      .catch(({ response }) => {
        toast.error(response?.data.error);
      }),
  });
};
