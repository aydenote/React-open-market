import styled from 'styled-components';

function CartNoneProduct() {
  return (
    <Container>
      <MainText>장바구니에 담긴 상품이 없습니다.</MainText>
      <SubText>원하는 상품을 장바구니에 담아보세요!</SubText>
    </Container>
  );
}

export default CartNoneProduct;

const Container = styled.section`
  margin-top: 200px;
  text-align: center;
`;

const MainText = styled.p`
  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 23px;
`;
const SubText = styled.p`
  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: #767676;
`;
