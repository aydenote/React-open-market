import axios from "axios";
import { useNavigate } from "react-router-dom";
import { getCookie } from "../util/cookie";
import styles from "./styles/AddProductBtn.module.css";
import productInfoStyles from "./styles/AddProductInfoDetail.module.css";

function AddProductBtn({ imgFile }) {
  const navigate = useNavigate();
  function addProductAxios(imgFile, productName, productPrice, shippingMethod, shippingFee, productStock, productInfo) {
    const formData = new FormData();
    formData.append("product_name", productName);
    formData.append("image", imgFile);
    formData.append("price", productPrice);
    formData.append("shipping_method", shippingMethod === "parcel" ? "PARCEL" : "DELIVERY ");
    formData.append("shipping_fee", shippingFee);
    formData.append("stock", productStock);
    formData.append("product_info", productInfo);
    formData.append("token", getCookie("Token"));
    return axios({
      url: `https://openmarket.weniv.co.kr/products/`,
      method: "post",
      headers: {
        Authorization: `JWT ${getCookie("Token")}`,
      },
      data: formData,
    });
  }
  function clickCancel(event) {
    event.preventDefault();
    navigate("/sellerCenter");
  }

  async function addProduct() {
    const inputEl = document.querySelectorAll(`input`);
    const productName = inputEl[1].value;
    const productPrice = parseInt(inputEl[2].value.replaceAll(",", ""));
    const shippingMethod = document.querySelector(`.${productInfoStyles.clicked}`).dataset.key;
    const shippingFee = parseInt(inputEl[3].value.replaceAll(",", ""));
    const productStock = parseInt(inputEl[4].value.replaceAll(",", ""));
    const productInfo = document.querySelector("textarea").value;
    try {
      const res = await addProductAxios(imgFile, productName, productPrice, shippingMethod, shippingFee, productStock, productInfo);
      if (res.status === 201) {
        navigate("/sellerCenter");
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <section className={styles.BtnContainer}>
      <button className={styles.cancelBtn} onClick={clickCancel}>
        취소
      </button>
      <button className={styles.saveBtn} onClick={addProduct}>
        저장하기
      </button>
    </section>
  );
}

export default AddProductBtn;
