import { Link } from 'react-router-dom';
import LoginForm from '../form/LoginForm';
import BuyerButton from '../button/LoginBuyer';
import SellerButton from '../button/LoginSeller';
import LogoSrc from '../../asset/Logo-hodu.svg';
import styled from 'styled-components';

function Login() {
  return (
    <Main>
      <LogoContainer>
        <img src={LogoSrc} alt="로고" />
      </LogoContainer>
      <UserInfoContainer>
        <LoginType>
          <BuyerButton />
          <SellerButton />
        </LoginType>
        <LoginForm />
      </UserInfoContainer>
      <JoinFindContainer>
        <Link to="/signUp">
          <SignUpText>회원가입</SignUpText>
        </Link>
        <Link to="/findPw">
          <FindPwText>비밀번호 찾기</FindPwText>
        </Link>
      </JoinFindContainer>
    </Main>
  );
}

export default Login;

const Main = styled.div`
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const LogoContainer = styled.section`
  margin-bottom: 70px;
  img {
    width: 238px;
  }
`;

const UserInfoContainer = styled.section``;
const LoginType = styled.div`
  position: relative;
  top: 10px;
`;

const JoinFindContainer = styled.section`
  display: flex;
  margin-top: 30px;
`;

const SignUpText = styled.p`
  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: #333333;
  :hover {
    cursor: pointer;
  }
  ::after {
    content: 'ㅣ';
    margin: 0px 10px;
    color: #333333;
  }
`;
const FindPwText = styled.p`
  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: #333333;
  :hover {
    cursor: pointer;
  }
`;
