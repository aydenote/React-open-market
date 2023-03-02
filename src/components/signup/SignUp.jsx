import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import BuyerButton from '../button/SignupBuyer';
import SellerButton from '../button/SignupSeller';
import SignupButton from '../button/Signup';
import PolicyForm from '../form/PolicyForm';
import SellerSignUpForm from '../form/SellerSignUpForm.jsx';
import BuyerSignUpForm from '../form/BuyerSignUpForm.jsx';
import LogoSrc from '../../asset/Logo-hodu.svg';
import styled from 'styled-components';

function SignUp() {
  const signupType = useSelector(state => state.signupType);

  return (
    <Main>
      <LogoContainer>
        <Link to="/login">
          <img src={LogoSrc} alt="로고" />
        </Link>
      </LogoContainer>
      <UserInfoContainer>
        <SignUpType>
          <BuyerButton />
          <SellerButton />
        </SignUpType>
      </UserInfoContainer>
      {signupType === '구매회원 가입' ? <BuyerSignUpForm /> : <SellerSignUpForm />}
      <PolicyForm />
      <SignupButton />
    </Main>
  );
}

export default SignUp;

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
const SignUpType = styled.div`
  position: relative;
  top: 10px;
  button {
    font-family: 'Spoqa Han Sans Neo';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;
    text-align: center;
    color: #000000;
  }
`;
