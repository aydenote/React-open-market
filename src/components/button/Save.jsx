import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addProduct } from '../../apis/products';
import styled from 'styled-components';

function Save() {
  const navigate = useNavigate();
  const imageData = useSelector(state => state.image);

  async function clickSaveProduct() {
    const formData = new FormData();
    const inputEl = document.querySelectorAll(`input`);
    const productName = inputEl[1].value;
    const productPrice = parseInt(inputEl[2].value.replaceAll(',', ''));
    const shippingMethod = document.querySelector('button').disabled ? 'parcel' : 'delivery';
    const shippingFee = parseInt(inputEl[3].value.replaceAll(',', ''));
    const productStock = parseInt(inputEl[4].value.replaceAll(',', ''));
    const productInfo = document.querySelector('textarea').value;

    formData.append('product_name', productName);
    formData.append('image', imageData);
    formData.append('price', productPrice);
    formData.append('shipping_method', shippingMethod === 'parcel' ? 'PARCEL' : 'DELIVERY');
    formData.append('shipping_fee', shippingFee);
    formData.append('stock', productStock);
    formData.append('product_info', productInfo);

    try {
      const addProductRes = await addProduct(formData);
      if (addProductRes.status === 201) {
        navigate('/sellerCenter');
      }
    } catch (error) {
      console.error(error);
    }
  }

  return <SaveButton onClick={clickSaveProduct}>저장하기</SaveButton>;
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
