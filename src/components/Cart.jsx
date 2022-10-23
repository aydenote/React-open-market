import axios from "axios";
import styles from "./styles/Cart.module.css";
import circleImg from "../asset/check-circle.svg";
import CartNoneProduct from "./CartNoneProduct";
import CartProduct from "./CartProduct";
import { useState, useEffect } from "react";

function Cart() {
  let [cartData, setCartData] = useState();

  useEffect(() => {
    axios({
      url: `https://openmarket.weniv.co.kr/cart`,
      method: "get",
      headers: {
        withCredentials: true,
        Authroization:
          "JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoyLCJlbWFpbCI6IiIsInVzZXJuYW1lIjoiYnV5ZXIxIiwiZXhwIjoxNjY3MDUzMzIyfQ.l5bCGUyiYwOdfkj5wuB5Zl4XLs4rbjEjhzecs-yFWOw",
      },
    })
      .then((response) => {
        console.log(response);
        setCartData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <section className={styles.mainContainer}>
      <p className={styles.title}>장바구니</p>
      <ul className={styles.itemList}>
        <li>
          <img src={circleImg} alt="" />
        </li>
        <li>상품정보</li>
        <li>수량</li>
        <li>상품금액</li>
      </ul>
      {cartData.count === 0 ? <CartNoneProduct /> : <CartProduct />}
    </section>
  );
}

export default Cart;
