import { useState } from 'react';
import UserImg from '../../asset/user.svg';
import MyPageDropDown from '../MyPageDropDown';
import styles from '../styles/MyPage.module.css';

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
    <div className={styles.myPageContainer} onClick={clickMyPageDropDown}>
      <img className={styles.myPage} src={UserImg} alt="마이페이지" />
      {modalOpen && <MyPageDropDown />}
    </div>
  );
}
export default MyPage;
