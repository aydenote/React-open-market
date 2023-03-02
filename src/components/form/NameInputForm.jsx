import styled from 'styled-components';

function NameInputForm(props) {
  return (
    <>
      <UserNameLabel>이름</UserNameLabel>
      <UserNameInput type="text" required />
    </>
  );
}

export default NameInputForm;

const UserNameLabel = styled.p`
  margin-bottom: 12px;
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
