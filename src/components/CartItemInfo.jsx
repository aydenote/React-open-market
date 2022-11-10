import styles from "./styles/CartItemInfo.module.css";
import ProductCount from "./ProductCount";
import CartTotalPrice from "./CartTotalPrice";

function CartItemInfo({ productData }) {
  return (
    <>
      {productData.map((cartItem) => (
        <article
          className={styles.cartItemContainer}
          key={cartItem.data.product_id}
        >
          <input
            className={styles.checkbox}
            type="radio"
            name="itemSelected"
            id="itemSelected"
          />
          <label className={styles.checkLabel} htmlFor="itemSelected"></label>
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
      <CartTotalPrice cartInfo={productData} />
    </>
  );
}

export default CartItemInfo;
