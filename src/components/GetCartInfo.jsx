import { useEffect } from "react";
import axios from "axios";
import { getCookie } from "../util/cookie";

function GetCartInfo({ setCartData }) {
  function cartAxios() {
    return axios.create({
      baseURL: "https://openmarket.weniv.co.kr/cart",
      headers: {
        Authorization: `JWT ${getCookie("Token")}`,
      },
    });
  }

  async function getCartData() {
    const res = await cartAxios().get();
    const data = await res.data;
    await setCartData(data);
  }

  useEffect(() => {
    getCartData();
  }, []);

  return;
}

export default GetCartInfo;
