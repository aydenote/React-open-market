import { useDispatch, useSelector } from 'react-redux';
import { setPass, setFail } from '../../reducers/signupFail';
import { validId } from '../../apis/signup';
import styled from 'styled-components';

function Duplication() {
  const dispatch = useDispatch();
  async function checkDuplicate(event) {
    event.preventDefault();
    const userId = document.getElementById('id').value;
    try {
      const validRes = await validId(userId);
      dispatch(setPass(validRes.data.Success));
    } catch (error) {
      console.error(error.response.data.FAIL_Message);
      dispatch(setFail(error.response.data.FAIL_Message));
    }
  }

  return <ConfirmIdBtn onClick={checkDuplicate}>중복확인</ConfirmIdBtn>;
}

export default Duplication;

const ConfirmIdBtn = styled.button`
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
  cursor: pointer;
`;
