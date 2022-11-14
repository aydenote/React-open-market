import axios from "axios";
import { useState, useEffect } from "react";

function GetProductData(props) {
  function productAxios(productId) {
    return axios.create({
      baseURL: `https://openmarket.weniv.co.kr/products/${productId}`,
      headers: {
        Authorization: "JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoyLCJlbWFpbCI6IiIsInVzZXJuYW1lIjoiYnV5ZXIxIiwiZXhwIjoxNjY4OTU2NjY0fQ.x6t1EsSh12ntMdwTd3qN2gj3OnVUBG-evFO7GGGM1NY",
      },
    });
  }

  async function getProductInfo(cartInfo) {
    const promises = cartInfo.map(async (item) => {
      const productInfo = await productAxios(item.product_id).get();
      productInfo.data.quantity = item.quantity;
      return productInfo;
    });

    props.setProductData(await Promise.all(promises));
  }

  useEffect(() => {
    getProductInfo(props.cartData);
  }, []);

  return;
}
export default GetProductData;
