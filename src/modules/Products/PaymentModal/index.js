import { useEffect, useState } from "react";
import Modal from "@components/Modal";
import { getPayments } from "@redux/actions/payment";
import { useDispatch, useSelector } from "react-redux";

import style from "./style.module.css";

const PaymentModal = ({
  paymentModal,
  setPaymentModal,
  payment,
  setPayment,
  values,
  setValues,
  handleSubmit,
}) => {
  const dispatch = useDispatch();
  const [type, setType] = useState(true);
  const { data, loading } = useSelector((state) => state.payment);

  useEffect(() => {
    dispatch(getPayments());
  }, [dispatch]);

  const handleValue = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <Modal active={paymentModal} setActive={setPaymentModal} closeOverlayClick>
      {type ? (
        <div className={style.modalContent}>
          <h2 className={style.title}>{"To'lov turini tanlang"}</h2>
          {loading ? (
            <h2>Loading...</h2>
          ) : (
            data?.map((i) => (
              <div
                key={i.payment}
                className={style.paymentType}
                onClick={() => {
                  setPayment(i);
                  setType(false);
                }}
              >
                {i.payment}
              </div>
            ))
          )}
        </div>
      ) : (
        <div className={style.modalContent}>
          <h2 className={style.title}>{"To'lov"}</h2>
          <form onSubmit={handleSubmit}>
            {payment?.require?.map(
              (i, index) =>
                i !== "amount" && (
                  <div className={style.formGroup} key={index}>
                    <label htmlFor={i} className={style.label}>
                      {i}
                    </label>
                    <input
                      type="text"
                      id={i}
                      name={i}
                      className={style.input}
                      onChange={(e) => handleValue(e)}
                    />
                  </div>
                )
            )}
            <button type="submit">Submit</button>
          </form>
        </div>
      )}
    </Modal>
  );
};

export default PaymentModal;
