import { useState } from "react";
import styles from "./styles/AddProductInfoDetail.module.css";

function AddProductInfoDetail() {
  let [productNameLength, setProductNameLength] = useState("0");
  function changeProductName(event) {
    setProductNameLength(event.target.value.length);
  }

  // 숫자 콤마 추가
  function changePrice(event) {
    let value = event.target.value.replace(/[^0-9]/g, "");
    if (value === "" || value === "0") {
      return (event.target.value = "");
    }
    event.target.value = Number(value).toLocaleString();
  }

  function clickShippingType(event) {
    let shippingType = event.target.dataset.key;
    if (shippingType === "parcel") {
      event.target.classList.add(`${styles.clicked}`);
      event.target.nextSibling.classList.remove(`${styles.clicked}`);
    } else {
      event.target.classList.add(`${styles.clicked}`);
      event.target.previousSibling.classList.remove(`${styles.clicked}`);
    }
  }

  return (
    <section className={styles.productInfo}>
      <section className={styles.productNameConatainer}>
        <p className={styles.infoTitle}>상품명</p>
        <input className={styles.productNameInput} type="text" onChange={changeProductName} maxLength="20" />
        <p className={styles.productNameLength}>{productNameLength}/20</p>
      </section>

      <section className={styles.productPriceContainer}>
        <p className={styles.infoTitle}>판매가</p>
        <div className={styles.priceBox}>
          <input className={styles.priceInput} type="text" onChange={changePrice} maxLength="10" />
        </div>
      </section>

      <section className={styles.productShipping}>
        <p className={styles.infoTitle}>배송방법</p>
        <button className={`${styles.parcelShipping} ${styles.clicked}`} onClick={clickShippingType} data-key="parcel">
          택배, 소포, 등기
        </button>
        <button className={styles.directShipping} onClick={clickShippingType} data-key="direct">
          직접배송(화물배달)
        </button>
        <p className={styles.infoTitle}>기본 배송비</p>
        <div className={styles.priceBox}>
          <input className={styles.priceInput} type="text" onChange={changePrice} maxLength="6" />
        </div>
      </section>
      <section className={styles.productStockContainer}>
        <p className={styles.infoTitle}>재고</p>
        <div className={styles.priceBox}>
          <input className={styles.priceInput} type="text" onChange={changePrice} maxLength="10" />
        </div>
      </section>

    </section>
  );
}
export default AddProductInfoDetail;
