import Caution from './Caution';
import AddProductInfo from './AddProductInfo';
import AddProductInfoDetail from './AddProductInfoDetail';
import ProductDetailText from './ProductDetailText';
import AddProductBtn from './AddProductBtn';
import styled from 'styled-components';

function AddProduct() {
  return (
    <>
      <PageTitle>상품 등록</PageTitle>
      <MainContentBox>
        <Caution />
        <AddProductInfo />
        <AddProductInfoDetail />
        <ProductDetailText />
        <AddProductBtn />
      </MainContentBox>
    </>
  );
}

export default AddProduct;

const PageTitle = styled.h1`
  margin: 44px 0px 42px 100px;
  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 44px;
`;

const MainContentBox = styled.section`
  display: grid;
  grid-template-columns: 420px 534px 866px;
  grid-template-rows: 484px 1fr 220px;
`;
