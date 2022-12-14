import axios from "axios";
import { useState } from "react";
import styles from "./styles/BuyerSignUp.module.css";

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
      validText.classList.remove(`${styles.fail}`);
      validText.classList.add(`${styles.success}`);
      setValidText(res.data.Success);
    } catch (error) {
      console.error(error.response.data.FAIL_Message);
      validText.classList.remove(`${styles.success}`);
      validText.classList.add(`${styles.fail}`);
      setValidText(error.response.data.FAIL_Message);
    }
  }
  function inputPassword(event) {
    const target = event.target;
    const reCheckInput = document.querySelector(`.${styles.userPwCheckInput}`);

    if (target.classList[0] == styles.userPwInput) {
      checkPassword(target);
      reCheckPassword(reCheckInput);
    } else {
      reCheckPassword(target);
    }
  }

  function checkPassword(target) {
    const reg = /^(?=.*[a-zA-Z])((?=.*\d)|(?=.*\W)).{6,12}$/;
    const password = target.value;
    if (password.match(reg) !== null) {
      target.classList.add(`${styles.pass}`);
    } else {
      target.classList.remove(`${styles.pass}`);
    }
  }

  function reCheckPassword(target) {
    const password = document.querySelector(`.${styles.userPwInput}`);
    const confirmPassword = target.value;
    if (password.value === confirmPassword && password.classList[1] === `${styles.pass}`) {
      target.classList.add(`${styles.pass}`);
    } else {
      target.classList.remove(`${styles.pass}`);
    }
  }

  function clickSelectBox(event) {
    const target = event.target;
    target.classList.toggle(`${styles.clicked}`);
    document.querySelector(`.${styles.selectList}`).classList.toggle(`${styles.visible}`);
  }

  function clickSelectList(event) {
    const selectedOption = event.target.innerText;
    const selectBox = document.querySelector(`.${styles.userPhoneFirst}`);
    const selectList = document.querySelector(`.${styles.selectList}`);

    if (selectedOption.length === 3) {
      selectBox.innerText = selectedOption;
      selectBox.classList.remove(`${styles.clicked}`);
      selectList.classList.remove(`${styles.visible}`);
    }
  }

  function inputUserPhone(event) {
    let phoneNumber = event.target;
    // 4?????? ????????? ??????
    if (phoneNumber.value.length > phoneNumber.maxLength) {
      phoneNumber.value = phoneNumber.value.slice(0, 4);
    }
  }

  return (
    <form className={styles.buyerSignUpForm} action="">
      <p className={styles.userIdLabel}>?????????</p>
      <div className={styles.userIdContainer}>
        <input className={styles.userIdInput} type="text" required />
        <button className={styles.confirmIdBtn} onClick={checkDuplicate}>
          ????????????
        </button>
      </div>
      {validText === "" ? <p className={styles.validText}></p> : <p className={styles.validText}>{validText}</p>}
      <p className={styles.userPwLabel}>????????????</p>
      <input className={styles.userPwInput} type="password" placeholder="?????? 1?????? ?????? ?????? ?????? ????????? ????????? 6~12??? ?????? ????????????" onChange={inputPassword} maxLength="12" required />
      <p className={styles.userPwCheckLabel}>???????????? ?????????</p>
      <input className={styles.userPwCheckInput} type="password" onChange={inputPassword} required />
      <p className={styles.userNameLabel}>??????</p>
      <input className={styles.userNameInput} type="text" required />
      <p className={styles.userPhoneLabel}>???????????????</p>
      <div className={styles.userPhoneContainer}>
        <div className={styles.userPhoneFirst} onClick={clickSelectBox}>
          010
        </div>
        <ul className={styles.selectList} onClick={clickSelectList}>
          <li className={styles.listItem}>010</li>
          <li className={styles.listItem}>011</li>
          <li className={styles.listItem}>016</li>
          <li className={styles.listItem}>017</li>
        </ul>
        <input className={styles.userPhoneMiddle} type="number" onInput={inputUserPhone} maxLength="4" required />
        <input className={styles.userPhoneLast} type="number" onInput={inputUserPhone} maxLength="4" required />
      </div>
      <p className={styles.userEmailLabel}>?????????</p>
      <div>
        <input className={styles.userEmailFirst} type="text" required />
        <span className={styles.emailAt}>@</span>
        <input className={styles.userEmailLast} type="text" required />
      </div>
    </form>
  );
}

export default BuyerSignUpForm;
