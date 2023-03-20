import { Link } from 'react-router-dom';
import MyPage from '../modal/MyPage';
import CartImg from '../../asset/shopping-cart.svg';
import styled from 'styled-components';

function HeaderBuyer() {
  return (
    <>
      <Link to="/cart">
        <CartContainer>
          <CartImage src={CartImg} alt="장바구니" />
        </CartContainer>
      </Link>
      <MyPage />
    </>
  );
}
export default HeaderBuyer;

const CartContainer = styled.div`
  text-align: center;
  :hover {
    cursor: pointer;
  }
  ::after {
    content: '장바구니';
    display: block;
    font-family: 'Spoqa Han Sans Neo';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    color: #767676;
  }
`;

const CartImage = styled.img`
  display: block;
  margin: auto;
`;
