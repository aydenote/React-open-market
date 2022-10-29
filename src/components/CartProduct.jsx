import axios from "axios";
import { useState, useEffect } from "react";
import ProductCount from "./ProductCount";
import styles from "./styles/CartProduct.module.css";

function CartProduct(props) {
  const [productCount, setProductCount] = useState(0);
  let [imgUrl, setImgUrl] = useState([]);

  function productAxios(productId) {
    return axios.create({
      baseURL: `https://openmarket.weniv.co.kr/products/${productId}`,
      headers: {
        Authorization:
          "JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjozLCJlbWFpbCI6IiIsInVzZXJuYW1lIjoiYnV5ZXIyIiwiZXhwIjoxNjY3NjU5MDc3fQ.-6v1ctWP9bz41w8HEar0rhk_op5W2zmUhlaaFyT5mCM",
      },
    });
  }

  async function getProductInfo(cartInfo) {
    const promises = cartInfo.map(async (item) => {
      const productInfo = await productAxios(item.product_id).get();
      return productInfo;
    });

    setImgUrl(await Promise.all(promises));
  }

  useEffect(() => {
    getProductInfo(props.cartData.results);
  }, []);

  return (
    <>
      {console.log(imgUrl)}
      {imgUrl.map((cartItem) => (
        <article
          className={styles.cartItemContainer}
          key={cartItem.data.product_id}
        >
          <input
            className={styles.checkbox}
            type="checkbox"
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
            <ProductCount getCount={productCount} setCount={setProductCount} />
          </section>
          <section className={styles.productInfoPrice}>
            <p>{(cartItem.data.price * productCount).toLocaleString()}</p>
          </section>
        </article>
      ))}
    </>
  );
}

export default CartProduct;
