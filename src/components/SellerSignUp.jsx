import styles from "./styles/SellerSignUp.module.css";

function SellerSignUp() {
  return (
    <form className={styles.sellerSignUpForm} action="">
      <label className={styles.userIdLabel} htmlFor="">
        아이디
      </label>
      <div className={styles.userIdContainer}>
        <input className={styles.userIdInput} type="text" />
        <button className={styles.confirmIdBtn}>중복확인</button>
      </div>
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
      <label className={styles.userIdLabel} htmlFor="">
        사업자 등록번호
      </label>
      <div className={styles.companyNumberContainer}>
        <input className={styles.companyNumberInput} type="text" />
        <button className={styles.confirmIdBtn}>인증</button>
      </div>
      <label className={styles.storeNameLabel} htmlFor="">
        스토어 이름
      </label>
      <input className={styles.userNameInput} type="text" />
    </form>
  );
}

export default SellerSignUp;
