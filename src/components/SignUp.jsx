import SellerSignUpForm from "../components/SellerSignUpForm.jsx";
import BuyerSignUpForm from "../components/BuyerSignUpForm.jsx";
import LogoImg from "../asset/Logo-hodu.svg";
import styles from "./styles/SignUp.module.css";
import { useState } from "react";

function SignUp(props) {
  const [type, setType] = useState(props.signUpType);

  function clickSignUpType(event) {
    const loginType = event.target.innerText;

    if (loginType === "구매회원 가입") {
      event.target.classList.add(`${styles.clicked}`);
      event.target.nextSibling.classList.remove(`${styles.clicked}`);
      setType("buyer");
    } else {
      event.target.classList.add(`${styles.clicked}`);
      event.target.previousSibling.classList.remove(`${styles.clicked}`);
      setType("seller");
    }
  }

  return (
    <div className={styles.main}>
      <section className={styles.logoContainer}>
        <img src={LogoImg} alt="로고" />
      </section>
      <section className={styles.userInfoContainer}>
        <div className={styles.signUpType}>
          <button className={[styles.buyer, styles.clicked].join(" ")} onClick={clickSignUpType}>
            구매회원 가입
          </button>
          <button className={styles.seller} onClick={clickSignUpType}>
            판매회원 가입
          </button>
        </div>
      </section>
      {type === "buyer" ? <BuyerSignUpForm /> : <SellerSignUpForm />}
      <form className={styles.policyForm} action="">
        <input id="checkbox" className={styles.policyCheckBox} type="checkbox" alt="이용 정책 동의" />
        <label htmlFor="checkbox"></label>
        <label className={styles.policyLabel} htmlFor="policyCheck">
          호두샵의 <strong>이용약관</strong> 및 <strong>개인정보처리방침</strong>에 대한 내용을 확인하였고 동의합니다.
        </label>
      </form>
      <button className={styles.signUpBtn}>가입하기</button>
    </div>
  );
}

export default SignUp;
