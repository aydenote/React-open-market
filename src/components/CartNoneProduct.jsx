import styles from "./styles/CartNoneProduct.module.css";

function CartNoneProduct() {
  return (
    <section className={styles.container}>
      <p className={styles.mainText}>장바구니에 담긴 상품이 없습니다.</p>
      <p className={styles.subText}>원하는 상품을 장바구니에 담아보세요!</p>
    </section>
  );
}

export default CartNoneProduct;
