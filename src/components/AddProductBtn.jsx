import axios from "axios";
import { getCookie } from "../util/cookie";
import styles from "./styles/AddProductBtn.module.css";

function AddProductBtn({ imgFile }) {
  function addProductAxios(imgFile, productImg) {
    return axios({
      url: `https://openmarket.weniv.co.kr/products/`,
      method: "post",
      headers: {
        Authorization: `JWT ${getCookie("Token")}`,
      },
      data: {
        product_name: "테스트",
        // image: productImg,
        // image: imgFile,
        image: "https://openmarket.weniv.co.kr/media/products/2022/11/28/3e98fec97717ed541b327f6360f349fd.jpg",
        price: 1,
        shipping_method: "DELIVERY", // PARCEL 또는 DELIVERY 선택
        shipping_fee: 1,
        stock: 1,
        product_info: "테스트 중입니다",
        token: getCookie("Token"),
      },
    });
  }

  async function addProduct() {
    const inputEl = document.querySelectorAll(`input`);
    const productImg = inputEl[0].nextElementSibling.childNodes[0].src;
    // const productName = inputEl[1].value;
    // const productPrice = parseInt(inputEl[2].value.replaceAll(",", ""));
    // const shippingMethodxW
    // const shippingFee = parseInt(inputEl[3].value.replaceAll(",", ""));
    // const productStock = parseInt(inputEl[4].value.replaceAll(",", ""));

    const res = await addProductAxios(imgFile, productImg);
  }

  return (
    <section className={styles.BtnContainer}>
      <button className={styles.cancelBtn}>취소</button>
      <button className={styles.saveBtn} onClick={addProduct}>
        저장하기
      </button>
    </section>
  );
}

export default AddProductBtn;
