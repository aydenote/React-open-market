import styles from "./styles/ProductQty.module.css";

function ProductQty({ productInfo, productCount }) {
  return (
    <section className={styles.productInfoPrice}>
      <p className={styles.sumPrice}>
        {(productInfo.data.price * productCount).toLocaleString()}
      </p>
      <button className={styles.orderBtn}>주문하기</button>
    </section>
  );
}

export default ProductQty;
