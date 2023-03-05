import axios from 'axios';
import { getCookie } from '../util/cookie';

export const getProducts = () => {
  return axios({
    url: 'https://openmarket.weniv.co.kr/products',
    method: 'get',
  });
};

export async function getProduct(productList) {
  const productData = [];
  for (const product of productList) {
    await axios({
      baseURL: `https://openmarket.weniv.co.kr/products/${product.product_id}`,
      method: 'get',
      headers: {
        Authorization: `JWT ${getCookie('Token')}`,
      },
    }).then(product => productData.push(product.data));
  }
  return productData;
}
