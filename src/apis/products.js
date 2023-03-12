import axios from 'axios';
import { getCookie } from '../util/cookie';

export function getProducts() {
  return axios({
    url: 'https://openmarket.weniv.co.kr/products',
    method: 'get',
  });
}

export function getProductDetail(productId) {
  return axios({
    url: `https://openmarket.weniv.co.kr/products/${productId}`,
    method: 'get',
    headers: {
      Authorization: `JWT ${getCookie('Token')}`,
    },
  });
}
