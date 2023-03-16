import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

function BuyInfo() {
  const itemList = useLocation().state.itemList;
  const cartList = useLocation().state.cartList;
  const count = useLocation().state.count;

  function getProductCount(productData) {
    for (const cart of cartList) {
      if (cart.product_id === productData.product_id) {
        return cart.quantity;
      }
    }
  }

  function getTotalPrice() {
    let totalPrice = 0;
    for (const item of itemList) {
      cartList.map(cart => {
        if (cart.product_id === item.product_id) {
          totalPrice += cart.quantity * item.price + item.shipping_fee;
        }
      });
    }
    return totalPrice;
  }

  return (
    <>
      <Title>주문/결제하기</Title>
      <ProductContainer>
        <ItemList>
          <li>상품정보</li>
          <li>할인</li>
          <li>배송비</li>
          <li>주문금액</li>
        </ItemList>
        {itemList.map(productData => (
          <ItemContainer key={productData.product_id}>
            <ItemInfo>
              <ItemImage src={productData.image}></ItemImage>
              <ItemStore>{productData.store_name}</ItemStore>
              <ItemName>{productData.product_name}</ItemName>
              <ItemCount>{count ? `수량: ${count}개` : `수량: ${getProductCount(productData)}개`}</ItemCount>
            </ItemInfo>
            <ItemDiscount>-</ItemDiscount>
            <ItemShipping>
              {productData.shipping_fee > 0 ? `${productData.shipping_fee.toLocaleString()}원` : '무료배송'}
            </ItemShipping>
            <ItemPrice>
              {count
                ? `${(count * productData.price).toLocaleString()}원`
                : `${(getProductCount(productData) * productData.price).toLocaleString()}원`}
            </ItemPrice>
          </ItemContainer>
        ))}
      </ProductContainer>
      <TotalPrice>
        {count
          ? (itemList[0].shipping_fee + itemList[0].price * count).toLocaleString()
          : `${getTotalPrice().toLocaleString()}원`}
      </TotalPrice>
    </>
  );
}

export default BuyInfo;

const Title = styled.h1`
  margin-top: 54px;
  text-align: center;
  font-weight: 700;
  font-size: 36px;
  line-height: 44px;
`;

const ProductContainer = styled.section`
  margin: 52px auto;
`;

const ItemList = styled.ul`
  display: grid;
  grid-template-columns: 3fr 1fr 1fr 1fr;
  padding: 18px 0px;
  text-align: center;
  background: #f2f2f2;
  border-radius: 10px;
`;

const ItemContainer = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr 1fr 1fr;
  margin-top: 16px;
  background: #ffffff;
`;

const ItemInfo = styled.section``;

const ItemImage = styled.img`
  float: left;
  margin-right: 36px;
  width: 104px;
  height: 104px;
  border-radius: 10px;
`;

const ItemStore = styled.p`
  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: #767676;
`;

const ItemName = styled.p`
  margin: 6px 0 10px 0;
  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
`;

const ItemCount = styled.p`
  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: #767676;
`;

const ItemDiscount = styled.p`
  text-align: center;
  vertical-align: middle;
  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 104px;
  color: #767676;
`;

const ItemShipping = styled.section`
  text-align: center;
  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 104px;
  color: #767676;
`;

const ItemPrice = styled.p`
  text-align: center;
  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 104px;
`;

const TotalPrice = styled.p`
  width: 1280px;
  margin: auto;
  text-align: right;
  font-family: 'Spoqa Han Sans Neo';
  font-weight: 700;
  font-size: 24px;
  line-height: 30px;
  color: #eb5757;
  ::before {
    content: '총 주문금액';
    margin-right: 10px;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 23px;
    color: #000000;
  }
`;
