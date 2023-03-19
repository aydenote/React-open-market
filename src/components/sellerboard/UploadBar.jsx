import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import uploadSrc from '../../asset/icon-plus.svg';
import styled from 'styled-components';

function UploadBar() {
  const saleItem = useSelector(state => state.seller);

  return (
    <DashboardHeader>
      <div>
        <Title>대시보드</Title>
        <StoreName>{saleItem ? saleItem[0].store_name : null}</StoreName>
      </div>
      <AddProductLink to="/addProduct">
        <img src={uploadSrc} alt="업로드" />
      </AddProductLink>
    </DashboardHeader>
  );
}

export default UploadBar;

const DashboardHeader = styled.header`
  margin: 44px 0px 42px 100px;
  display: flex;
  justify-content: space-between;
`;

const Title = styled.p`
  display: inline-block;
  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 44px;
`;

const StoreName = styled.p`
  display: inline-block;
  margin-left: 16px;
  font-style: normal;
  font-weight: 500;
  font-size: 36px;
  line-height: 44px;
  color: #21bf48;
`;

const AddProductLink = styled(Link)`
  display: flex;
  align-items: center;
  margin-right: 100px;
  padding: 12px;
  background: #21bf48;
  border-radius: 5px;
  ::after {
    display: inline-block;
    margin-left: 9px;
    content: '상품 업로드';
    color: #ffffff;
  }
  :hover {
    cursor: pointer;
  }
`;
