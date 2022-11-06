import axios from "axios";
import { useState, useEffect } from "react";
import ProductCount from "./ProductCount";
import styles from "./styles/CartProduct.module.css";

function CartProduct(props) {
  let [imgUrl, setImgUrl] = useState([]);

  function productAxios(productId) {
    return axios.create({
      baseURL: `https://openmarket.weniv.co.kr/products/${productId}`,
      headers: {
        Authorization:
          "JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoyLCJlbWFpbCI6IiIsInVzZXJuYW1lIjoiYnV5ZXIxIiwiZXhwIjoxNjY4MzMyMTk4fQ.vaIg0_zDvz3uDF2eFyDOwq7IL0KAO_00BZnRXCfs8c8",
      },
    });
  }

  async function getProductInfo(cartInfo) {
    const promises = cartInfo.map(async (item) => {
      const productInfo = await productAxios(item.product_id).get();
      productInfo.data.quantity = item.quantity;
      return productInfo;
    });

    setImgUrl(await Promise.all(promises));
  }

  useEffect(() => {
    getProductInfo(props.cartData.results);
  }, []);

  function prodocutQty(event) {
    console.dir(event);
  }

  return (
    <>
      {imgUrl.map((cartItem) => (
        <article
          className={styles.cartItemContainer}
          key={cartItem.data.product_id}
        >
          <input
            className={styles.checkbox}
            type="radio"
            name="checkCircle"
            id="checkCircle"
          />
          <label className={styles.checkLabel} htmlFor="checkCircle"></label>
          <img
            className={styles.productImg}
            src={cartItem.data.image}
            alt="장바구니 상품"
          />
          <section className={styles.productInfoContainer}>
            <p className={styles.storeName}>{cartItem.data.store_name}</p>
            <p className={styles.productName}>{cartItem.data.product_name}</p>
            <p className={styles.productPrice}>
              {cartItem.data.price.toLocaleString()}
            </p>
            <p className={styles.shipping}>
              {cartItem.data.shipping_method === "PARCEL"
                ? "소포배송"
                : "택배배송"}{" "}
              / {cartItem.data.shipping_fee === 0 ? "무료배송" : "유료배송"}
            </p>
          </section>
          <section className={styles.productInfoCount}>
            <ProductCount
              quantity={cartItem.data.quantity}
              productInfo={cartItem}
            />
          </section>
        </article>
      ))}
      <section className={styles.totalInfoContainer}>
        <div className={styles.itemPriceBox}>
          <p className={styles.priceText}>총 상품 금액</p>
          <p className={styles.priceNumber}>{}</p>
        </div>
        <div className={styles.minus}></div>
        <div className={styles.saleBox}>
          <p className={styles.saleText}>상품 할인</p>
          <p className={styles.saleNumber}>0</p>
        </div>
        <div className={styles.plus}></div>
        <div className={styles.shippingFeeBox}>
          <p className={styles.shippingFeeText}>배송비</p>
          <p className={styles.shippingFeeNumber}>{}</p>
        </div>
        <div className={styles.totalPriceBox}>
          <p className={styles.totalPriceText}>결제 예정 금액</p>
          <p className={styles.totalPriceNumber}>{}</p>
        </div>
      </section>
    </>
  );
}

export default CartProduct;
