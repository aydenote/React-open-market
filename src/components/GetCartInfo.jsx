import { useEffect, useState } from "react";
import axios from "axios";

function GetCartInfo({ setCartData }) {
  function cartAxios() {
    return axios.create({
      baseURL: "https://openmarket.weniv.co.kr/cart",
      headers: {
        Authorization: "JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoyLCJlbWFpbCI6IiIsInVzZXJuYW1lIjoiYnV5ZXIxIiwiZXhwIjoxNjY4OTU2NjY0fQ.x6t1EsSh12ntMdwTd3qN2gj3OnVUBG-evFO7GGGM1NY",
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
