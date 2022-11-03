import { useEffect, useState } from "react";
import minusImg from "../asset/icon-minus-line.svg";
import plusImg from "../asset/icon-plus-line.svg";
import styles from "./styles/ProductCount.module.css";

function ProductCount(props) {
  function clickMinus(event) {
    const count = event.currentTarget.nextSibling.innerText;
    count <= 1
      ? props.setProductCount(1)
      : props.setProductCount(props.productCount - 1);
  }

  function clickPlus(event) {
    const count = event.currentTarget.previousSibling.innerText;
    props.setProductCount(props.productCount + 1);
  }

  useEffect(() => {
    props.setProductCount(props.quantity);
  }, []);

  return (
    <>
      <div className={styles.countContainer}>
        <button className={styles.minusBtn} onClick={clickMinus}>
          <img src={minusImg} alt="상품 수량 감소" />
        </button>
        <p className={styles.productCount}>{props.productCount}</p>
        <button className={styles.plusBtn} onClick={clickPlus}>
          <img src={plusImg} alt="상품 수량 증가" />
        </button>
      </div>
    </>
  );
}

export default ProductCount;
