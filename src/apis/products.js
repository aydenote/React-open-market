import axios from 'axios';

export const getProduct = () => {
  return axios({
    url: 'https://openmarket.weniv.co.kr/products',
    method: 'get',
  });
};
