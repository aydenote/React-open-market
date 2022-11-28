import axios from "axios";
import { getCookie } from "../util/cookie";
import { useEffect } from "react";

function GetSellerProduct({ setSellerData }) {
  function sellerProductAxios() {
    return axios({
      baseURL: `https://openmarket.weniv.co.kr/seller`,
      headers: {
        Authorization: `JWT ${getCookie("Token")}`,
      },
    });
  }

  async function getSellerProductInfo() {
    const res = await sellerProductAxios();
    setSellerData(res.data.results);
  }

  useEffect(() => {
    getSellerProductInfo();
  }, []);
}
export default GetSellerProduct;
