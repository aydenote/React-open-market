import { useSelector } from 'react-redux';
import SaleUpdateButton from './button/ItemUpdate';
import SaleDeleteButton from './button/SaleDeleteButton';
import styled from 'styled-components';

function SaleInfo() {
  const saleItem = useSelector(state => state.seller);

  return (
    <Container>
      <header>
        <HeaderList>
          <li>상품 정보</li>
          <li>판매 가격</li>
          <li>수정</li>
          <li>삭제</li>
        </HeaderList>
      </header>
      {saleItem.map(item => (
        <ItemContainer key={item.product_id} data-id={item.product_id}>
          <div>
            <ItemImg src={item.image} alt="상품" />
            <ItemInfoText>
              <ItemName>{item.product_name}</ItemName>
              <ItemStock>재고 : {item.stock}개</ItemStock>
            </ItemInfoText>
          </div>
          <ItemPrice>{item.price.toLocaleString()}원</ItemPrice>
          <SaleUpdateButton />
          <SaleDeleteButton />
        </ItemContainer>
      ))}
    </Container>
  );
}

export default SaleInfo;

const Container = styled.section`
  width: 1440px;
  height: 884px;
  margin: 0 100px 96px 30px;
  background: #f2f2f2;
  border: 1px solid #c4c4c4;
  border-radius: 5px;
  overflow: hidden;
`;

const HeaderList = styled.ul`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  line-height: 60px;
  text-align: center;
  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  border-bottom: 1px solid #c4c4c4;
  background: #ffffff;
`;

const ItemContainer = styled.article`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  padding: 16px 0px;
  align-items: center;
  background: #ffffff;
  border-bottom: 1px solid #c4c4c4;
`;

const ItemImg = styled.img`
  float: left;
  width: 70px;
  height: 70px;
  margin-left: 30px;
  border-radius: 50%;
`;

const ItemInfoText = styled.div`
  display: flex;
  margin-top: 12px;
  flex-direction: column;
  justify-content: center;
`;

const ItemName = styled.p`
  display: inline-block;
  margin-left: 30px;
  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
`;

const ItemStock = styled.p`
  display: inline-block;
  margin-left: 30px;
  margin-top: 10px;
  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  color: #767676;
`;

const ItemPrice = styled.p`
  text-align: center;
  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
`;
