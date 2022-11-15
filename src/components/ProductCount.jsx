import { useState, useEffect } from "react";
import minusImg from "../asset/icon-minus-line.svg";
import plusImg from "../asset/icon-plus-line.svg";
import ProductPrice from "./ProductPrice";
import styles from "./styles/ProductCount.module.css";

function ProductCount(props) {
  let [productCount, setProductCount] = useState(props.productInfo.data.quantity);

  function clickMinus(event) {
    const count = event.currentTarget.nextSibling.innerText;
    count <= 1 ? setProductCount(1) : setProductCount(productCount - 1);
    setTimeout(() => {
      getProductPrice();
    });
  }

  function clickPlus() {
    setProductCount(productCount + 1);
    setTimeout(() => {
      getProductPrice();
    });
  }

  function getProductPrice() {
    let totalPrice = 0;
    let priceArr = Array.prototype.slice.call(document.querySelectorAll(".price"));

    for (let i = 0; i < priceArr.length; i++) {
      totalPrice += parseInt(priceArr[i].innerText.replaceAll(",", ""));
    }
    props.setPrice(totalPrice);
  }

  useEffect(() => {
    getProductPrice();
  }, []);

  return (
    <>
      <div className={styles.countContainer}>
        <button className={styles.minusBtn} onClick={clickMinus}>
          <img src={minusImg} alt="상품 수량 감소" />
        </button>
        <p className={`${styles.productCount} itemCount`}>{productCount}</p>
        <button className={styles.plusBtn} onClick={clickPlus}>
          <img src={plusImg} alt="상품 수량 증가" />
        </button>
      </div>
      <ProductPrice productInfo={props.productInfo} productCount={productCount} />
    </>
  );
}

export default ProductCount;
