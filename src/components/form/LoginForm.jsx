import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import login from '../../apis/login';
import { setFail, setPass } from '../../reducers/loginFail';
import { setCookie } from '../../util/cookie';
import LoginFail from '../login/LoginFail';
import styled from 'styled-components';

function LoginForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loginFail = useSelector(state => state.loginFail);
  const loginType = useSelector(state => state.loginType);

  function loginAxios() {
    const userId = document.querySelector('#userId').value;
    const userPw = document.querySelector('#userPw').value;
    return login(userId, userPw, loginType);
  }

  async function clickLogin(event) {
    event.preventDefault();
    try {
      const res = await loginAxios();
      if (res.status === 200) {
        setCookie('Token', res.data.token);
        setCookie('UserType', res.data.user_type);
        dispatch(setPass());
        navigate('/');
      }
    } catch (error) {
      console.error(error);
      if (error.response.data.FAIL_Message) {
        dispatch(setFail(error.response.data.FAIL_Message));
      }
    }
  }

  return (
    <FormContainer action="">
      <IdInputText type="text" id="userId" placeholder="아이디" />
      <PwInputText type="password" id="userPw" placeholder="비밀번호" />
      {loginFail ? <LoginFail /> : null}
      <LoginBtn onClick={clickLogin}>로그인</LoginBtn>
    </FormContainer>
  );
}

export default LoginForm;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  padding: 34px;
  border-radius: 10px;
  border: 1px solid #c4c4c4;
  background: #ffffff;
  label {
    font-family: 'Spoqa Han Sans Neo';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    color: #767676;
  }
`;

const IdInputText = styled.input`
  width: 480px;
  height: 60px;
  background: #ffffff;
  border: none;
  border-bottom: 1px solid #c4c4c4;
  :focus {
    outline: none;
  }
`;

const PwInputText = styled.input`
  width: 480px;
  height: 60px;
  background: #ffffff;
  border: none;
  border-bottom: 1px solid #c4c4c4;
  :focus {
    outline: none;
  }
`;

const LoginBtn = styled.button`
  margin-top: 36px;
  padding: 19px 0px;
  border: 1px solid transparent;
  border-radius: 5px;
  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  text-align: center;
  color: #ffffff;
  background: #21bf48;
  :hover {
    cursor: pointer;
  }
`;
