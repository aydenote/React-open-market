import styled from 'styled-components';

function ProductDetailText() {
  return (
    <ProductDetailContainer>
      <InfoTitle>상품 상세 정보</InfoTitle>
      <DetailText type="text" />
    </ProductDetailContainer>
  );
}
export default ProductDetailText;

const ProductDetailContainer = styled.section`
  width: 1320px;
  margin: 40px 0 0 80px;
  grid-column-start: 2;
`;

const InfoTitle = styled.p`
  margin-bottom: 10px;
  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: #767676;
`;

const DetailText = styled.textarea`
  width: 100%;
  height: 700px;
  padding: 20px;
  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 20px;
  border: 1px solid #c4c4c4;
  border-radius: 5px;
  background: #f2f2f2;
  resize: none;
  :focus {
    outline: none;
  }
`;
