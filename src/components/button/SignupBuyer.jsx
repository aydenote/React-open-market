import { useDispatch, useSelector } from 'react-redux';
import { setBuyerType } from '../../reducers/signupType';
import styled from 'styled-components';

function SignupBuyer() {
  const dispatch = useDispatch();
  const signupType = useSelector(state => state.signupType);

  function clickSignupType() {
    dispatch(setBuyerType());
  }
  return signupType === '구매회원 가입' ? (
    <ButtonClicked>구매회원 가입</ButtonClicked>
  ) : (
    <Button onClick={clickSignupType}>구매회원 가입</Button>
  );
}

export default SignupBuyer;

const Button = styled.button`
  width: 275px;
  padding: 20px 0px;
  border: 1px solid #c4c4c4;
  border-radius: 10px 10px 0px 0px;
  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  text-align: center;
  color: #000000;
  background: #f2f2f2;
`;

const ButtonClicked = styled.button`
  width: 275px;
  padding: 20px 0px;
  border: 1px solid #c4c4c4;
  border-bottom: none;
  border-radius: 10px 10px 0px 0px;
  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  text-align: center;
  color: #000000;
  background-color: #ffffff;
  z-index: 1;
`;
