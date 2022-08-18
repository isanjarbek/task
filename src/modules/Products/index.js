import { useEffect, useState } from "react";
import { pay } from "@redux/actions/pay";
import Product from "@components/Product";
import PaymentModal from "./PaymentModal";
import CalcCard from "@components/CalcCard";
import { getProducts } from "@redux/actions/product";
import { useDispatch, useSelector } from "react-redux";

import style from "./style.module.css";

const Products = () => {
  const [count, setCount] = useState(0);
  const [values, setValues] = useState({});
  const [payment, setPayment] = useState({});
  const [totalPrice, setTotalPrice] = useState(0);
  const [paymentModal, setPaymentModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState([]);

  const dispatch = useDispatch();
  const { data, loading } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  useEffect(() => {
    setTotalPrice(
      selectedProduct.map((i) => i.price).reduce((a, b) => a + b, 0)
    );
  }, [selectedProduct]);

  const handleSubmit = async (e) => {
    await e.preventDefault();
    await dispatch(
      pay({ ...values, amount: totalPrice, payment: payment.payment })
    );
  };

  return (
    <section className="container">
      <div className={style.row}>
        {loading ? (
          <h2>Loading...</h2>
        ) : (
          <div className={style.products}>
            {data?.map((i) => (
              <Product
                key={i.title}
                img={i.img}
                name={i.title}
                brand={i.brand}
                price={i.price}
                oldPrice={i.oldPrice}
                count={count}
                totalPrice={count * i.price}
                onClick={() =>
                  setSelectedProduct([...selectedProduct, i]) &&
                  setCount(count + 1)
                }
              />
            ))}
          </div>
        )}
        <CalcCard
          count={selectedProduct.length}
          totalPrice={totalPrice}
          gotoPayment={() => selectedProduct.length && setPaymentModal(true)}
        />

        <PaymentModal
          payment={payment}
          setPayment={setPayment}
          paymentModal={paymentModal}
          setPaymentModal={setPaymentModal}
          values={values}
          setValues={setValues}
          handleSubmit={handleSubmit}
        />
      </div>
    </section>
  );
};

export default Products;
