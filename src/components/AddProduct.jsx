import Caution from "./Caution";
import AddProductInfo from "./AddProductInfo";
import AddProductInfoDetail from "./AddProductInfoDetail";
import ProductDetailText from "./ProductDetailText";
import AddProductBtn from "./AddProductBtn";
import styles from "./styles/AddProduct.module.css";
import { useState } from "react";

function AddProduct() {
  let [imgFile, setImgFile] = useState("");
  return (
    <>
      <h1 className={styles.pageTitle}>상품 등록</h1>
      <section className={styles.mainContentBox}>
        <Caution />
        <AddProductInfo setImgFile={setImgFile} />
        <AddProductInfoDetail />
        <ProductDetailText />
        <AddProductBtn imgFile={imgFile} />
      </section>
    </>
  );
}
export default AddProduct;
