import axios from "axios";
import { useState, useEffect } from "react";
import styles from "./styles/CartProduct.module.css";

function CartProduct(props) {
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
    // try {
    //   const res = await productAxios(productId).get();
    //   const data = await res.data;
    //   return data.image;
    // } catch (error) {
    //   console.log(error);
    // }
    console.log(cartInfo);
    for (const productInfo of cartInfo) {
      let imageUrl = await productAxios(productInfo.product_id);
    }
  }

  useEffect(() => {
    getProductInfo(props.cartData.results);
  }, []);

  return (
    <>
      {props.cartData.results.map((cartItem) => (
        <article className={styles.cartItemContainer} key={cartItem.product_id}>
          <input
            className={styles.checkbox}
            type="checkbox"
            name="checkCircle"
            id="checkCircle"
          />
          <label className={styles.checkLabel} htmlFor="checkCircle"></label>
          {/* <img src={getProductInfo(cartItem.product_id)} alt="장바구니 상품" /> */}
        </article>
      ))}
    </>
  );
}

export default CartProduct;
