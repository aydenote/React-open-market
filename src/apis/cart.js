import axios from 'axios';
import { getCookie } from '../util/cookie';

function getCartList() {
  return axios({
    baseURL: 'https://openmarket.weniv.co.kr/cart',
    method: 'GET',
    headers: {
      Authorization: `JWT ${getCookie('Token')}`,
    },
  });
}

export default getCartList;
