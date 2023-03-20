import axios from 'axios';
import { getCookie } from '../../util/cookie';
import styled from 'styled-components';
import { Navigate } from 'react-router-dom';

function Save({ imgFile }) {
  async function addProduct() {
    const inputEl = document.querySelectorAll(`input`);
    const productName = inputEl[1].value;
    const productPrice = parseInt(inputEl[2].value.replaceAll(',', ''));
    const shippingMethod = document.querySelector(`.clicked`).dataset.key;
    const shippingFee = parseInt(inputEl[3].value.replaceAll(',', ''));
    const productStock = parseInt(inputEl[4].value.replaceAll(',', ''));
    const productInfo = document.querySelector('textarea').value;
    try {
      const res = await addProductAxios(
        imgFile,
        productName,
        productPrice,
        shippingMethod,
        shippingFee,
        productStock,
        productInfo
      );
      if (res.status === 201) {
        Navigate('/sellerCenter');
      }
    } catch (error) {
      console.error(error);
    }
  }

  function addProductAxios(imgFile, productName, productPrice, shippingMethod, shippingFee, productStock, productInfo) {
    const formData = new FormData();
    formData.append('product_name', productName);
    formData.append('image', imgFile);
    formData.append('price', productPrice);
    formData.append('shipping_method', shippingMethod === 'parcel' ? 'PARCEL' : 'DELIVERY ');
    formData.append('shipping_fee', shippingFee);
    formData.append('stock', productStock);
    formData.append('product_info', productInfo);
    formData.append('token', getCookie('Token'));
    return axios({
      url: `https://openmarket.weniv.co.kr/products/`,
      method: 'post',
      headers: {
        Authorization: `JWT ${getCookie('Token')}`,
      },
      data: formData,
    });
  }

  return <SaveButton onClick={addProduct}>저장하기</SaveButton>;
}

export default Save;

const SaveButton = styled.button`
  width: 200px;
  padding: 19px 0px;
  border: none;
  border-radius: 5px;
  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  margin-left: 10px;
  background: #21bf48;
  color: #ffffff;
  cursor: pointer;
`;
