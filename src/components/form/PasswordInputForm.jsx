import failSrc from '../../asset/icon-check-off.svg';
import passSrc from '../../asset/icon-check-pass.svg';
import styled from 'styled-components';

function PasswordInputForm() {
  // 패스워드 유효성 검사
  function inputPassword() {
    const passwordInput = document.querySelector('.password');
    const passwordCheckInput = document.querySelector('.passwordCheck');
    const reg = /^(?=.*[a-zA-Z])((?=.*\d)|(?=.*\W)).{6,12}$/;
    if (passwordInput.value.match(reg) !== null) passwordInput.classList.add('pass');
    else passwordInput.classList.remove('pass');

    if (passwordInput.value === passwordCheckInput.value) passwordCheckInput.classList.add('pass');
    else passwordCheckInput.classList.remove('pass');
  }
  return (
    <>
      <UserPwLabel>비밀번호</UserPwLabel>
      <UserPwInput
        className="password"
        type="password"
        placeholder="최소 1개의 숫자 혹은 특수 문자를 포함한 6~12자 영문 비밀번호"
        onChange={inputPassword}
        maxLength="12"
        required
      />
      <UserPwCheckLabel>비밀번호 재확인</UserPwCheckLabel>
      <UserPwCheckInput className="passwordCheck" type="password" onChange={inputPassword} required />
    </>
  );
}

export default PasswordInputForm;

const UserPwLabel = styled.p`
  margin: 12px 0px;
  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: #767676;
`;

const UserPwInput = styled.input`
  width: 480px;
  padding: 18px 10px;
  border-radius: 5px;
  border: 1px solid #c4c4c4;
  background: url(${failSrc}) 440px 10px no-repeat;
  &.pass {
    background: url(${passSrc}) 440px 10px no-repeat;
  }
`;

const UserPwCheckLabel = styled.p`
  margin: 12px 0px;
  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: #767676;
`;

const UserPwCheckInput = styled.input`
  width: 480px;
  margin-bottom: 50px;
  padding: 18px 10px;
  border-radius: 5px;
  border: 1px solid #c4c4c4;
  background: url(${failSrc}) 440px 10px no-repeat;
  &.pass {
    background: url(${passSrc}) 440px 10px no-repeat;
  }
`;
