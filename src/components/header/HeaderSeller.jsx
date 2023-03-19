import { Link } from 'react-router-dom';
import MyPage from '../MyPage';
import BagImg from '../../asset/icon-shopping-bag.svg';
import styled from 'styled-components';

function HeaderSeller() {
  return (
    <>
      <MyPage />
      <Link to="/sellerCenter">
        <SellerCenter>
          <img src={BagImg} alt="" />
          <SellerText>판매자 센터</SellerText>
        </SellerCenter>
      </Link>
    </>
  );
}
export default HeaderSeller;

const SellerCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 168px;
  padding: 8px 0px;
  margin-left: 30px;
  background: #21bf48;
  border-radius: 5px;
`;

const SellerText = styled.p`
  margin-left: 12px;
  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 23px;
  color: #ffffff;
`;
