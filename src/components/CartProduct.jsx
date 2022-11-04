import axios from "axios";
import { useState, useEffect } from "react";
import ProductCount from "./ProductCount";
import styles from "./styles/CartProduct.module.css";

function CartProduct(props) {
  let [imgUrl, setImgUrl] = useState([]);
  let [productCount, setProductCount] = useState(0);

  function productAxios(productId) {
    return axios.create({
      baseURL: `https://openmarket.weniv.co.kr/products/${productId}`,
      headers: {
        Authorization:
          // "JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjozLCJlbWFpbCI6IiIsInVzZXJuYW1lIjoiYnV5ZXIyIiwiZXhwIjoxNjY3NjU5MDc3fQ.-6v1ctWP9bz41w8HEar0rhk_op5W2zmUhlaaFyT5mCM",
          // "JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoyLCJlbWFpbCI6IiIsInVzZXJuYW1lIjoiYnV5ZXIxIiwiZXhwIjoxNjY4MTc0NTk0fQ.6n63tmvXGyCK4Qwlb4ePx0IhrT54PXRU8j1ljf3Vdp4",
          // "JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjozLCJlbWFpbCI6IiIsInVzZXJuYW1lIjoiYnV5ZXIyIiwiZXhwIjoxNjY4MTc0NjgyfQ._Yvge5tKkonupxxwAckfQUmpgX-zpn4ALrLFLPBaVjE",
          "JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjo0LCJlbWFpbCI6IiIsInVzZXJuYW1lIjoiYnV5ZXIzIiwiZXhwIjoxNjY4MTc0NzU4fQ.m-vrxC2Ecy74PrEc3sAzAmJgEtAP3fiGq6V9cwJonKo",
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

  // function checkBoxOnlyOne(event) {
  //   const checkboxes = document.getElementsByName("animal");

  //   checkboxes.forEach((cb) => {
  //     cb.checked = false;
  //   });

  //   event.checked = true;
  // }

  // function loginAxios() {
  //   return axios({
  //     url: `https://openmarket.weniv.co.kr/accounts/login/`,
  //     method: "post",
  //     data: {
  //       username: "buyer3",
  //       password: "hodu0910",
  //       login_type: "BUYER", // BUYER : 일반 구매자, SELLER : 판매자
  //     },
  //   });
  // }

  // async function login() {
  //   try {
  //     const res = await loginAxios();
  //     console.log(res);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  // login();

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
            // onClick={checkBoxOnlyOne}
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
              setProductCount={setProductCount}
              productCount={productCount}
            />
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
