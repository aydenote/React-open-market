import Caution from "./Caution";
import AddProductInfo from "./AddProductInfo";
import AddProductInfoDetail from "./AddProductInfoDetail";
import ProductDetailText from "./ProductDetailText";
import styles from "./styles/AddProduct.module.css";

function AddProduct() {
  return (
    <>
      <h1 className={styles.pageTitle}>상품 등록</h1>
      <section className={styles.mainContentBox}>
        <Caution />
        <AddProductInfo />
        <AddProductInfoDetail />
        <ProductDetailText />
      </section>
    </>
  );
}
export default AddProduct;
