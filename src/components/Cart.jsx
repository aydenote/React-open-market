import styles from "./styles/Cart.module.css";
import CartNoneProduct from "./CartNoneProduct";
import CartProduct from "./CartProduct";
import GetCartInfo from "./GetCartInfo";
import { useState } from "react";

function Cart() {
  let [cartData, setCartData] = useState(false);

  return (
    <section className={styles.mainContainer}>
      <p className={styles.title}>장바구니</p>
      <ul className={styles.itemList}>
        <li>
          <div className={styles.categoryCircle}></div>
        </li>
        <li>상품정보</li>
        <li>수량</li>
        <li>상품금액</li>
      </ul>
      {cartData ? (
        <CartProduct cartData={cartData} />
      ) : (
        <GetCartInfo setCartData={setCartData} />
      )}
      {cartData && cartData.count == false ? <CartNoneProduct /> : null}
    </section>
  );
}

export default Cart;
