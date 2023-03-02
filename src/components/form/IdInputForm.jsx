import { useSelector } from 'react-redux';
import DuplicationButton from '../button/Duplication';
import styled from 'styled-components';

function IdInputForm() {
  const signupFail = useSelector(state => state.signupFail);

  return (
    <>
      <UserIdLabel>아이디</UserIdLabel>
      <UserIdContainer>
        <UserIdInput id="id" type="text" required />
        <DuplicationButton />
      </UserIdContainer>
      {signupFail.valid === false ? <FailText>{signupFail.text}</FailText> : <PassText>{signupFail.text}</PassText>}
    </>
  );
}

export default IdInputForm;

const UserIdLabel = styled.p`
  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: #767676;
`;

const UserIdContainer = styled.div`
  margin-top: 10px;
`;

const UserIdInput = styled.input`
  width: 346px;
  padding: 18px 10px;
  vertical-align: top;
  border: 1px solid #c4c4c4;
  border-radius: 5px;
`;

const FailText = styled.p`
  display: block;
  margin-top: 10px;
  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  color: #eb5757;
`;
const PassText = styled.p`
  display: block;
  margin-top: 10px;
  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  color: #21bf48;
`;
