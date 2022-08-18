import { separateNumberThousands } from "src/utils/numbers";

import style from "./style.module.css";

const CalcCard = ({ count, totalPrice, gotoPayment }) => {
  return (
    <div className={style.container}>
      <div className={style.flex}>
        <p>Mahsulotlar ({count})</p>
        <span>{separateNumberThousands(totalPrice)}</span>
      </div>
      <button onClick={gotoPayment}>To`lovga o`tish</button>
    </div>
  );
};

export default CalcCard;
