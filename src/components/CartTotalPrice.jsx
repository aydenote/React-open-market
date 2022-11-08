import { useEffect } from "react";
import styles from "./styles/CartTotalPrice.module.css";

function CartTotalPrice(props) {
  let count = 0;
  function totalProductPrice() {
    document.querySelectorAll(".ProductQty_sumPrice__Nd5LZ").forEach((node) => {
      count += Number(node.innerText.replaceAll(",", ""));
    });

    return count;
  }

  // totalProductPrice();

  return (
    <section className={styles.totalInfoContainer}>
      <div className={styles.itemPriceBox}>
        <p className={styles.priceText}>총 상품 금액</p>
        <p className={styles.priceNumber}>{totalProductPrice()}</p>
      </div>
      <div className={styles.minus}></div>
      <div className={styles.saleBox}>
        <p className={styles.saleText}>상품 할인</p>
        <p className={styles.saleNumber}>0</p>
      </div>
      <div className={styles.plus}></div>
      <div className={styles.shippingFeeBox}>
        <p className={styles.shippingFeeText}>배송비</p>
        <p className={styles.shippingFeeNumber}>{}</p>
      </div>
      <div className={styles.totalPriceBox}>
        <p className={styles.totalPriceText}>결제 예정 금액</p>
        <p className={styles.totalPriceNumber}>{}</p>
      </div>
    </section>
  );
}
export default CartTotalPrice;
