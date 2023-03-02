import styled from 'styled-components';

function EmailInputForm() {
  return (
    <>
      <UserEmailLabel>이메일</UserEmailLabel>
      <div>
        <UserEmailFirst type="text" required />
        <EmailAt>@</EmailAt>
        <UserEmailLast type="text" required />
      </div>
    </>
  );
}

export default EmailInputForm;

const UserEmailLabel = styled.p`
  margin: 12px 0px;
  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: #767676;
`;

const UserEmailFirst = styled.input`
  width: 220px;
  padding: 17.5px 0;
  text-align: center;
  border: 1px solid #c4c4c4;
  border-radius: 5px;
`;

const EmailAt = styled.span`
  margin: 0 11px;
  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  color: #767676;
`;

const UserEmailLast = styled.input`
  width: 220px;
  padding: 17.5px 0;
  text-align: center;
  border: 1px solid #c4c4c4;
  border-radius: 5px;
`;
