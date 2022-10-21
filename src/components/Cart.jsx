import styles from "./styles/Cart.module.css";
import circleImg from "../asset/check-circle.svg";
import CartNoneProduct from "./CartNoneProduct";
import CartProduct from "./CartProduct";

function Cart() {
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
      {/* 상품이 있는 경우와 없는 경우를 판단하여 컴포넌트를 삼항연산자를 통해 랜더링*/}
      <CartNoneProduct />
    </section>
  );
}

export default Cart;
