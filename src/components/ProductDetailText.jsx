import styles from "./styles/ProductDetailText.module.css";

function ProductDetailText() {
  return (
    <section className={styles.productDetailContainer}>
      <p className={styles.infoTitle}>상품 상세 정보</p>
      <textarea className={styles.detailText} type="text" />
    </section>
  );
}
export default ProductDetailText;
