import { useEffect, useState } from 'react';
import DeleteButton from '../button/Delete';
import OrderButton from '../button/Order';
import Decrease from '../button/Decrease';
import Increase from '../button/Increase';
import { getProductDetail } from '../../apis/products';
import styled from 'styled-components';

function CartItemInfo({ cartItem }) {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    async function getProductAPI() {
      const productData = await getProductDetail(cartItem.product_id);
      setProduct(productData.data);
    }
    getProductAPI();
  }, []);

  return (
    product && (
      <CartItemContainer>
        <input type="radio" name="itemSelected" id="itemSelected" />
        <ProductImg src={product.image} alt="장바구니 상품" />
        <ProductInfoContainer>
          <StoreName>{product.store_name}</StoreName>
          <ProductName>{product.product_name}</ProductName>
          <ProductPrice>{product.price.toLocaleString()}</ProductPrice>
          <Shipping>
            {product.shipping_method === 'PARCEL' ? '소포배송' : '택배배송'} /{' '}
            {product.shipping_fee === 0 ? '무료배송' : '유료배송'}
          </Shipping>
        </ProductInfoContainer>
        <ProductInfoCount>
          <Decrease cart={cartItem} />
          <ProductCountText>{cartItem.quantity}</ProductCountText>
          <Increase cart={cartItem} />
        </ProductInfoCount>
        <OrderPriceContainer>
          <SumProductPrice>{(cartItem.quantity * product.price).toLocaleString()}</SumProductPrice>
          <OrderButton product={product} />
        </OrderPriceContainer>
        <DeleteButton cartItem={cartItem} />
      </CartItemContainer>
    )
  );
}

export default CartItemInfo;

const CartItemContainer = styled.article`
  display: flex;
  width: 1280px;
  padding-left: 28px;
  margin-bottom: 10px;
  border: 2px solid #e0e0e0;
  border-radius: 10px;
  align-items: center;
`;

const ProductImg = styled.img`
  width: 160px;
  height: 160px;
  margin: 20px 0px 20px 40px;
  box-shadow: 1px 1px 5px 1px #000000;
  object-fit: fill;
  border-radius: 10px;
`;

const ProductInfoContainer = styled.section`
  width: 200px;
  margin-left: 35px;
`;

const StoreName = styled.p`
  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  color: #767676;
`;

const ProductName = styled.p`
  margin: 10px 0px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
`;

const ProductPrice = styled.p`
  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
`;

const Shipping = styled.p`
  margin-top: 40px;
  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  color: #767676;
`;

const ProductCountText = styled.p`
  flex-grow: 1;
  flex-shrink: 0;
  flex-basis: 50px;
  text-align: center;
  line-height: 50px;
`;

const ProductInfoCount = styled.section`
  display: flex;
  width: 152px;
  height: 50px;
  margin-left: 115px;
  border: 1px solid #c4c4c4;
  border-radius: 5px;
  background: #ffffff;
`;

const OrderPriceContainer = styled.section`
  display: grid;
  margin-left: 170px;
`;

const SumProductPrice = styled.p`
  text-align: center;
  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 23px;
  color: #eb5757;
  ::after {
    content: '원';
  }
`;
