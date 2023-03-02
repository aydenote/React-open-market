import IdInputForm from './IdInputForm';
import PasswordInputForm from './PasswordInputForm';
import NameInputForm from './NameInputForm';
import PhoneInputForm from './PhoneInputForm';
import EmailInputForm from './EmailInputForm';
import styled from 'styled-components';

function BuyerSignUpForm() {
  return (
    <BuyerSignUp action="">
      <IdInputForm />
      <PasswordInputForm />
      <NameInputForm />
      <PhoneInputForm />
      <EmailInputForm />
    </BuyerSignUp>
  );
}

export default BuyerSignUpForm;

const BuyerSignUp = styled.form`
  display: flex;
  flex-direction: column;
  width: 550px;
  padding: 34px;
  border-radius: 10px;
  border: 1px solid #c4c4c4;
  background: #ffffff;
`;
