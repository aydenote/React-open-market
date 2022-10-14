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
      event.target.classList.add("SignUp_clicked__KFQGo");
      event.target.nextSibling.classList.remove("SignUp_clicked__KFQGo");
      setType("buyer");
    } else {
      event.target.classList.add("SignUp_clicked__KFQGo");
      event.target.previousSibling.classList.remove("SignUp_clicked__KFQGo");
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
          <button
            className={[styles.buyer, styles.clicked].join(" ")}
            onClick={clickSignUpType}
          >
            구매회원 가입
          </button>
          <button className={styles.seller} onClick={clickSignUpType}>
            판매회원 가입
          </button>
        </div>
      </section>
      {type === "buyer" ? <BuyerSignUpForm /> : <SellerSignUpForm />}
    </div>
  );
}

export default SignUp;
