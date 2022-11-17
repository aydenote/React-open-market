import { useEffect } from "react";
import styles from "./styles/CartTotalPrice.module.css";

function CartTotalPrice({ cartInfo, price, shipping, setShipping }) {
  function getShippingFee() {
    let totalShippingFee = 0;
    cartInfo.forEach((item) => {
      totalShippingFee += item.data.shipping_fee;
    });
    setShipping(totalShippingFee);
  }

  useEffect(() => {
    getShippingFee();
  }, []);

  return (
    <section className={styles.totalInfoContainer}>
      <div className={styles.itemPriceBox}>
        <p className={styles.priceText}>총 상품 금액</p>
        <p className={styles.priceNumber}>{price.toLocaleString()}</p>
      </div>
      <div className={styles.minus}></div>
      <div className={styles.saleBox}>
        <p className={styles.saleText}>상품 할인</p>
        <p className={styles.saleNumber}>0</p>
      </div>
      <div className={styles.plus}></div>
      <div className={styles.shippingFeeBox}>
        <p className={styles.shippingFeeText}>배송비</p>
        <p className={styles.shippingFeeNumber}>{shipping.toLocaleString()}</p>
      </div>
      <div className={styles.totalPriceBox}>
        <p className={styles.totalPriceText}>결제 예정 금액</p>
        <p className={styles.totalPriceNumber}>{(price + shipping).toLocaleString()}</p>
      </div>
    </section>
  );
}
export default CartTotalPrice;
