import axios from 'axios';
import { getCookie } from '../util/cookie';

export const getProducts = () => {
  return axios({
    url: 'https://openmarket.weniv.co.kr/products',
    method: 'get',
  });
};

export async function getProduct(productId) {
  return axios({
    url: `https://openmarket.weniv.co.kr/products/${productId}`,
    method: 'get',
    headers: {
      Authorization: `JWT ${getCookie('Token')}`,
    },
  });
}
