import { useDispatch, useSelector } from 'react-redux';
import { setBuyerType } from '../../reducers/loginType';
import styled from 'styled-components';

function Buyer() {
  const dispatch = useDispatch();
  const loginType = useSelector(state => state.loginType);

  function clickLoginType() {
    dispatch(setBuyerType('구매회원 로그인'));
  }
  return loginType === '구매회원 로그인' ? (
    <ButtonClicked>구매회원 로그인</ButtonClicked>
  ) : (
    <Button onClick={clickLoginType}>구매회원 로그인</Button>
  );
}

export default Buyer;

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
