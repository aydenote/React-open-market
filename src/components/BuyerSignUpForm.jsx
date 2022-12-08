import styles from "./styles/BuyerSignUp.module.css";
import axios from "axios";
import { useState } from "react";

function BuyerSignUpForm() {
  let [validText, setValidText] = useState("");
  function validIdAxios(id) {
    return axios({
      url: `https://openmarket.weniv.co.kr/accounts/signup/valid/username/`,
      method: "post",
      data: {
        username: `${id}`,
      },
    });
  }

  async function checkDuplicate(event) {
    event.preventDefault();
    const userId = document.querySelector(`.${styles.userIdInput}`).value;
    const validText = document.querySelector(`.${styles.validText}`);
    try {
      const res = await validIdAxios(userId);
      setValidText(res.data.Success);
      validText.classList.remove(`${styles.fail}`);
      validText.classList.add(`${styles.success}`);
    } catch (error) {
      console.error(error.response.data.FAIL_Message);
      setValidText(error.response.data.FAIL_Message);
      validText.classList.remove(`${styles.success}`);
      validText.classList.add(`${styles.fail}`);
    }
  }

  function checkPassword(event) {
    const reg = /^(?=.*[a-zA-Z])((?=.*\d)|(?=.*\W)).{6,12}$/;
    const password = event.target.value;
    if (password.match(reg) == null) {
      event.target.classList.remove(`${styles.pass}`);
    } else event.target.classList.add(`${styles.pass}`);
  }

  function reCheckPassword(event) {
    const password = document.querySelector(`.${styles.userPwInput}`).value;
    const confirmPassword = event.target.value;

    if (password != confirmPassword) {
      event.target.classList.remove(`${styles.pass}`);
    } else event.target.classList.add(`${styles.pass}`);
  }

  return (
    <form className={styles.buyerSignUpForm} action="">
      <p className={styles.userIdLabel}>아이디</p>
      <div className={styles.userIdContainer}>
        <input className={styles.userIdInput} type="text" required />
        <button className={styles.confirmIdBtn} onClick={checkDuplicate}>
          중복확인
        </button>
      </div>
      {validText === "" ? <p className={styles.validText}></p> : <p className={styles.validText}>{validText}</p>}
      <p className={styles.userPwLabel}>비밀번호</p>
      <input className={styles.userPwInput} type="text" placeholder="최소 1개의 숫자 혹은 특수 문자를 포함한 6~12자 영문 비밀번호" onChange={checkPassword} maxLength="12" required />
      <p className={styles.userPwCheckLabel}>비밀번호 재확인</p>
      <input className={styles.userPwCheckInput} type="text" onChange={reCheckPassword} required />
      <p className={styles.userNameLabel}>이름</p>
      <input className={styles.userNameInput} type="text" required />
      <p className={styles.userPhoneLabel}>휴대폰번호</p>
      <div className={styles.userPhoneContainer}>
        <select className={styles.userPhoneFirst} name="phone" id="phone">
          <option className={styles} value="DEFAULT">
            010
          </option>
          <option className={styles} value="011">
            011
          </option>
          <option className={styles} value="016">
            016
          </option>
          <option className={styles} value="017">
            017
          </option>
        </select>
        <input className={styles.userPhoneMiddle} type="number" required />
        <input className={styles.userPhoneLast} type="number" required />
      </div>
      <p className={styles.userEmailLabel}>이메일</p>
      <div>
        <input className={styles.userEmailFirst} type="text" required />
        <span className={styles.emailAt}>@</span>
        <input className={styles.userEmailLast} type="text" required />
      </div>
    </form>
  );
}

export default BuyerSignUpForm;
