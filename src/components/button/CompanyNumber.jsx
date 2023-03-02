import styled from 'styled-components';

function CompanyNumber() {
  return <ConfirmIdButton>인증</ConfirmIdButton>;
}

export default CompanyNumber;
const ConfirmIdButton = styled.button`
  width: 122px;
  margin-left: 12px;
  padding: 17px;
  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  border: none;
  border-radius: 5px;
  color: #ffffff;
  background: #21bf48;
`;
