import Caution from "./Caution";
import AddProductInfo from "./AddProductInfo";
import styles from "./styles/AddProduct.module.css";

function AddProduct() {
  return (
    <>
      <h1 className={styles.pageTitle}>상품 등록</h1>
      <Caution />
      <AddProductInfo />
    </>
  );
}
export default AddProduct;
