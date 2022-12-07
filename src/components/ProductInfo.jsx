import { useState } from "react";
import { useLocation } from "react-router-dom";
import DetailCount from "./DetailCount.jsx";
import styles from "./styles/ProductInfo.module.css";

function ProductInfo() {
  const data = useLocation().state.data;
  let [productCount, setProductCount] = useState(1);

  return (
    <section className={styles.mainContainer}>
      <div className={styles.subContainer}>
        <section className={styles.topContainer}>
          <section className={styles.productImgContainer}>
            <img src={data.image} alt="상품 이미지" />
          </section>
          <section className={styles.productInfo}>
            <p className={styles.storeName}>{data.store_name}</p>
            <p className={styles.productName}>{data.product_name}</p>
            <p className={styles.productPrice}>{data.price.toLocaleString()}</p>
            <p className={styles.shipping}>
              {data.shipping_method === "PARCEL" ? "소포배송" : "택배배송"} / {data.shipping_fee === 0 ? "무료배송" : "유료배송"}
            </p>
            <div className={styles.countContainer}>
              <DetailCount setProductCount={setProductCount} productCount={productCount} />
            </div>
            <div className={styles.priceContainer}>
              <p className={styles.total}>총 상품 금액</p>
              <div className={styles.totalContainer}>
                <p className={styles.totalCount}>총 수량 {productCount}개</p>
                <p className={styles.totalPrice}>{(productCount * data.price).toLocaleString()}</p>
              </div>
            </div>
            <div className={styles.buttonContainer}>
              <button className={styles.buyBtn}>바로 구매</button>
              <button className={styles.cartBtn}>장바구니</button>
            </div>
          </section>
        </section>
        <section className={styles.bottomContainer}>
          <ul>
            <li className={styles.clicked}>버튼</li>
            <li>리뷰</li>
            <li>Q&A</li>
            <li>반품/교환정보</li>
          </ul>
        </section>
      </div>
    </section>
  );
}

export default ProductInfo;
