import { useState } from 'react';
import MyPageDropDown from './MyPageDropDown';
import userSrc from '../../asset/user.svg';
import styled from 'styled-components';

function MyPage() {
  let [modalOpen, setModalOpen] = useState(false);

  function clickMyPageDropDown(event) {
    // 드랍다운 및 화살표 클릭 예외처리
    const targetName = event.target.className.split('_')[0];
    if (targetName !== 'MyPageDropDown' && targetName !== '') {
      modalOpen === false ? setModalOpen(true) : setModalOpen(false);
    }
  }

  return (
    <MyPageContainer onClick={clickMyPageDropDown}>
      <MyPageImage src={userSrc} alt="마이페이지" />
      {modalOpen && <MyPageDropDown />}
    </MyPageContainer>
  );
}
export default MyPage;

const MyPageContainer = styled.div`
  position: relative;
  margin-left: 30px;
  cursor: pointer;
  ::after {
    content: '마이페이지';
    display: block;
    font-family: 'Spoqa Han Sans Neo';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    color: #767676;
  }
`;

const MyPageImage = styled.img`
  display: block;
  margin: auto;
`;
