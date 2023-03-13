import axios from 'axios';
import { getCookie } from '../util/cookie';

export function getCartList() {
  return axios({
    baseURL: 'https://openmarket.weniv.co.kr/cart',
    method: 'GET',
    headers: {
      Authorization: `JWT ${getCookie('Token')}`,
    },
  });
}

export function deleteCartItem(cartId) {
  return axios({
    baseURL: `https://openmarket.weniv.co.kr/cart/${cartId}`,
    method: 'DELETE',
    headers: {
      Authorization: `JWT ${getCookie('Token')}`,
    },
  });
}

export function addCartItem(productId, quantityItem) {
  return axios({
    baseURL: `https://openmarket.weniv.co.kr/cart/`,
    method: 'POST',
    headers: {
      Authorization: `JWT ${getCookie('Token')}`,
    },
    data: {
      product_id: productId,
      quantity: quantityItem,
      check: true,
    },
  });
}
