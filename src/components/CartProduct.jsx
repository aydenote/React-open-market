import styles from "./styles/CartProduct.module.css";

function CartProduct(props) {
  console.log(props.cartData);
  return (
    <>
      <article className={styles.cartItemContainer}>
        <input
          className={styles.checkbox}
          type="checkbox"
          name="checkCircle"
          id="checkCircle"
        />
        <label className={styles.checkLabel} htmlFor="checkCircle"></label>
        <img src="" alt="" />
      </article>
      <article></article>
    </>
  );
}

export default CartProduct;
