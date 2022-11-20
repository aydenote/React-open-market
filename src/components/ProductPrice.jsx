import styles from "./styles/ProductPrice.module.css";

function ProductPrice({ productInfo, productCount }) {
  return (
    <section className={styles.productInfoPrice}>
      <p className={`${styles.sumPrice} price`}>{(productInfo.data.price * productCount).toLocaleString()}</p>
      <button className={styles.orderBtn}>주문하기</button>
    </section>
  );
}

export default ProductPrice;
