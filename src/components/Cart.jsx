import axios from "axios";
import styles from "./styles/Cart.module.css";
import CartNoneProduct from "./CartNoneProduct";
import CartProduct from "./CartProduct";
import { useEffect, useState } from "react";

function Cart() {
  let [isCart, setIsCart] = useState(false);
  let [cartData, setCartData] = useState({});
  const cart = () => {
    return axios.create({
      baseURL: "https://openmarket.weniv.co.kr/cart",
      headers: {
        Authorization:
          "JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoyLCJlbWFpbCI6IiIsInVzZXJuYW1lIjoiYnV5ZXIxIiwiZXhwIjoxNjY3MDUzMzIyfQ.l5bCGUyiYwOdfkj5wuB5Zl4XLs4rbjEjhzecs-yFWOw",
      },
    });
  };

  async function getCartData() {
    try {
      const res = await cart().get();
      const data = await res.data;
      setCartData(data);
      if (data.count > 0) {
        setIsCart(true);
      } else {
        setIsCart(false);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getCartData();
  }, [isCart]);

  return (
    <section className={styles.mainContainer}>
      <p className={styles.title}>장바구니</p>
      <ul className={styles.itemList}>
        <li>
          <input className={styles.checkbox} />
          <label htmlFor="checkCircle"></label>
        </li>
        <li>상품정보</li>
        <li>수량</li>
        <li>상품금액</li>
      </ul>
      {isCart ? <CartProduct cartData={cartData} /> : <CartNoneProduct />}
    </section>
  );
}

export default Cart;
