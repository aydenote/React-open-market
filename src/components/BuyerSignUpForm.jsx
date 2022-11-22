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

  return (
    <form className={styles.buyerSignUpForm} action="">
      <label className={styles.userIdLabel} htmlFor="">
        아이디
      </label>
      <div className={styles.userIdContainer}>
        <input className={styles.userIdInput} type="text" />
        <button className={styles.confirmIdBtn} onClick={checkDuplicate}>
          중복확인
        </button>
      </div>
      {validText === "" ? <p className={styles.validText}></p> : <p className={styles.validText}>{validText}</p>}
      <label className={styles.userPwLabel} htmlFor="">
        비밀번호
      </label>
      <input className={styles.userPwInput} type="password" />
      <label className={styles.userPwCheckLabel} htmlFor="">
        비밀번호 재확인
      </label>
      <input className={styles.userPwCheckInput} type="password" />
      <label className={styles.userNameLabel} htmlFor="">
        이름
      </label>
      <input className={styles.userNameInput} type="text" />
      <label className={styles.userPhoneLabel} htmlFor="">
        휴대폰번호
      </label>
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
        <input className={styles.userPhoneMiddle} type="number" />
        <input className={styles.userPhoneLast} type="number" />
      </div>
      <label className={styles.userEmailLabel} htmlFor="">
        이메일
      </label>
      <div>
        <input className={styles.userEmailFirst} type="text" />
        <span className={styles.emailAt}>@</span>
        <input className={styles.userEmailLast} type="text" />
      </div>
    </form>
  );
}

export default BuyerSignUpForm;
