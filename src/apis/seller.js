import axios from 'axios';
import { getCookie } from '../util/cookie';

export function getSaleProduct() {
  return axios({
    url: 'https://openmarket.weniv.co.kr/seller',
    method: 'get',
    headers: {
      Authorization: `JWT ${getCookie('Token')}`,
    },
  });
}

export function deleteSaleProduct(productId) {
  return axios({
    url: `https://openmarket.weniv.co.kr/products/${productId}`,
    method: 'delete',
    headers: {
      Authorization: `JWT ${getCookie('Token')}`,
    },
  });
}
