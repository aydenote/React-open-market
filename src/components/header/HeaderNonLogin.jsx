import { Link } from 'react-router-dom';
import CartImg from '../../asset/shopping-cart.svg';
import UserImg from '../../asset/user.svg';
import styled from 'styled-components';

function HeaderNonLogin() {
  return (
    <>
      <CartContainer>
        <CartImage src={CartImg} alt="장바구니" />
      </CartContainer>
      <Link to="/login">
        <LoginContainer>
          <LoginImage src={UserImg} alt="로그인" />
        </LoginContainer>
      </Link>
    </>
  );
}
export default HeaderNonLogin;

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

const LoginContainer = styled.div`
  margin-left: 30px;
  :hover {
    cursor: pointer;
  }
  ::after {
    content: '로그인';
    display: block;
    font-family: 'Spoqa Han Sans Neo';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    color: #767676;
  }
`;

const LoginImage = styled.img`
  display: block;
  margin: auto;
`;
