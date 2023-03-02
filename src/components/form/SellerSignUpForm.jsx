import IdInputForm from './IdInputForm';
import PasswordInputForm from './PasswordInputForm';
import NameInputForm from './NameInputForm';
import PhoneInputForm from './PhoneInputForm';
import EmailInputForm from './EmailInputForm';
import CompanyNumberButton from '../button/CompanyNumber';
import styled from 'styled-components';

function SellerSignUpForm() {
  return (
    <SellerSignUp>
      <IdInputForm />
      <PasswordInputForm />
      <NameInputForm />
      <PhoneInputForm />
      <EmailInputForm />
      <CompanyNumber htmlFor="">사업자 등록번호</CompanyNumber>
      <CompanyNumberContainer>
        <CompanyNumberInput type="text" required />
        <CompanyNumberButton />
      </CompanyNumberContainer>
      <StoreNameLabel htmlFor="">스토어 이름</StoreNameLabel>
      <UserNameInput type="text" />
    </SellerSignUp>
  );
}

export default SellerSignUpForm;

const SellerSignUp = styled.section`
  display: flex;
  flex-direction: column;
  width: 550px;
  padding: 34px;
  border-radius: 10px;
  border: 1px solid #c4c4c4;
  background: #ffffff;
`;

const CompanyNumber = styled.label`
  margin-top: 12px;
  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: #767676;
`;

const CompanyNumberContainer = styled.form`
  margin-top: 10px;
`;

const CompanyNumberInput = styled.input`
  width: 346px;
  padding: 18px 10px;
  vertical-align: top;
  border: 1px solid #c4c4c4;
  border-radius: 5px;
`;

const StoreNameLabel = styled.label`
  margin: 12px 0;
  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: #767676;
`;

const UserNameInput = styled.input`
  padding: 18px 10px;
  vertical-align: top;
  border: 1px solid #c4c4c4;
  border-radius: 5px;
`;
