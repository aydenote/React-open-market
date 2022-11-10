import { useState } from "react";
import GetProductData from "./GetProductData";
import CartItemInfo from "./CartItemInfo";

function CartProduct(props) {
  let [productData, setProductData] = useState(false);

  return (
    <>
      {productData ? (
        <CartItemInfo productData={productData} />
      ) : (
        <GetProductData
          cartData={props.cartData.results}
          setProductData={setProductData}
        />
      )}
    </>
  );
}

export default CartProduct;
