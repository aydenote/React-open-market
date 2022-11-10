import { useEffect } from "react";
import styles from "./styles/CartTotalPrice.module.css";

function CartTotalPrice({ cartInfo }) {
  let totalPrice = 0;
  let totalShippingFee = 0;

  function getProductPrice() {
    console.log(document.querySelectorAll(`.${styles.productInfoCount}`));
    document
      .querySelectorAll(".CartProduct_productInfoCount__0z7fn")
      .forEach((node) => {
        let productPrice = node.children[0].innerText;
        let productQty = node.children[1].firstChild.innerText.replaceAll(
          ",",
          ""
        );
        totalPrice += productPrice * productQty;
      });
    return totalPrice;
  }

  function getShippingFee() {
    cartInfo.forEach((item) => {
      totalShippingFee += item.data.shipping_fee;
    });
    return totalShippingFee;
  }

  function getTotalFee() {
    const price = document.querySelector(".CartTotalPrice_priceNumber__1yOi9");

    // const shipping = document.querySelector(
    //   ".CartTotalPrice_shippingFeeNumber__paryM"
    // ).innerText;
  }

  return (
    <section className={styles.totalInfoContainer}>
      <div className={styles.itemPriceBox}>
        <p className={styles.priceText}>총 상품 금액</p>
        <p className={styles.priceNumber}>{getProductPrice()}</p>
      </div>
      <div className={styles.minus}></div>
      <div className={styles.saleBox}>
        <p className={styles.saleText}>상품 할인</p>
        <p className={styles.saleNumber}>0</p>
      </div>
      <div className={styles.plus}></div>
      <div className={styles.shippingFeeBox}>
        <p className={styles.shippingFeeText}>배송비</p>
        <p className={styles.shippingFeeNumber}>
          {getShippingFee().toLocaleString()}
        </p>
      </div>
      <div className={styles.totalPriceBox}>
        <p className={styles.totalPriceText}>결제 예정 금액</p>
        <p className={styles.totalPriceNumber}>{getTotalFee()}</p>
      </div>
    </section>
  );
}
export default CartTotalPrice;
