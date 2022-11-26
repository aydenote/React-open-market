import axios from "axios";
import { useEffect } from "react";
import { getCookie } from "../util/cookie";

function GetProductData(props) {
  function productAxios(productId) {
    return axios.create({
      baseURL: `https://openmarket.weniv.co.kr/products/${productId}`,
      headers: {
        Authorization: `JWT ${getCookie("Token")}`,
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
