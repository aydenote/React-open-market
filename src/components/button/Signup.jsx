import { useNavigate } from 'react-router-dom';
import signup from '../../apis/signup';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

function Signup() {
  const navigate = useNavigate();
  const idValid = useSelector(state => state.signupFail.valid);

  async function createAccount(event) {
    event.preventDefault();
    const userData = document.querySelectorAll('input');
    const id = userData[0].value;
    const password = userData[1].value;
    const passwordCheck = userData[2].value;
    const name = userData[3].value;
    const phoneNumber = `${userData[4].previousElementSibling.previousElementSibling.innerText}${userData[4].value}${userData[5].value}`;
    const passwordValid = document.querySelector('.pass');
    const policy = document.getElementById('checkbox').checked;
    if (name && policy && passwordValid && idValid && phoneNumber.length === 11) {
      try {
        const signupRes = await signup(id, password, passwordCheck, name, phoneNumber);
        if (signupRes.status === 201) navigate('/login');
      } catch (error) {
        console.error(error);
      }
    }
  }
  return <SignUpBtn onClick={createAccount}>가입하기</SignUpBtn>;
}

export default Signup;

const SignUpBtn = styled.button`
  width: 480px;
  padding: 19px 200px;
  border-radius: 5px;
  margin: 34px 0px 110px 0px;
  border: none;
  cursor: pointer;
  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  color: #ffffff;
  background: #21bf48;
`;
