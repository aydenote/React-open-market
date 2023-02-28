import { useSelector } from 'react-redux';
import styled from 'styled-components';

function LoginFail() {
  const failText = useSelector(state => state.loginFail);

  return <FailText>{failText}</FailText>;
}
export default LoginFail;

const FailText = styled.p`
  margin-top: 26px;
  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  color: red;
`;
