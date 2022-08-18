import React, { useState } from "react";
import Image from "next/image";
// import { MinusIcon, PlusIcon } from "@constants/svg";
import { textSlice } from "src/utils/textSlice";
import { separateNumberThousands } from "src/utils/numbers";

import style from "./style.module.css";

const Product = ({ name, img, brand, price, oldPrice, count, onClick }) => {
  // const [countValue, setCountValue] = useState(count);
  return (
    <div className={style.container} onClick={onClick}>
      <div className={style.product_img}>
        <Image src={img} alt="" width={77} height={77} />
      </div>
      <div className={style.content}>
        <h4 className={style.name}>{textSlice(name, 40)}</h4>
        <p className={style.brand}>{brand}</p>
      </div>

      <div className={style.content}>
        <h4 className={style.price}>{separateNumberThousands(price)}</h4>
        <p className={style.oldPrice}>{separateNumberThousands(oldPrice)}</p>
      </div>
      <div className={style.icons}>
        {/* <div
          className={style.icon}
          onClick={() => {
            setCountValue(countValue - 1);
          }}
        >
          <MinusIcon />
        </div> */}
        <div>
          <span className={style.count} onClick={onClick}>
            Sotib olish
          </span>
        </div>
        {/* <div
          className={style.icon}
          onClick={() => {
            setCountValue(countValue + 1);
          }}
        >
          <PlusIcon />
        </div>*/}
      </div>
    </div>
  );
};

export default Product;
