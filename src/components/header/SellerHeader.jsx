import { Link } from 'react-router-dom';
import LogoSrc from '../../asset/Logo-hodu.svg';
import styled from 'styled-components';

function SellerHeader() {
  return (
    <HeaderContainer>
      <Link to="/">
        <SellerlogoImg src={LogoSrc} alt="로고" />
      </Link>
      <SellerCenterText>판매자 센터</SellerCenterText>
    </HeaderContainer>
  );
}

export default SellerHeader;

const HeaderContainer = styled.header`
  min-width: 1200px;
  margin: auto;
  display: flex;
  padding: 26px 0px;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.1);
`;

const SellerlogoImg = styled.img`
  margin-left: 100px;
`;

const SellerCenterText = styled.p`
  margin-left: 16px;
  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 500;
  font-size: 30px;
  line-height: 38px;
`;
