import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import SellerSignUpForm from "../components/SellerSignUpForm.jsx";
import BuyerSignUpForm from "../components/BuyerSignUpForm.jsx";
import LogoImg from "../asset/Logo-hodu.svg";
import styles from "./styles/SignUp.module.css";
import BuyerSignUpStyles from "./styles/BuyerSignUp.module.css";

function SignUp({ signUpType }) {
  const [type, setType] = useState(signUpType);
  const navigate = useNavigate();

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

  function signUpAxios(id, pw, pw2, name, phoneNumber) {
    return axios({
      url: `https://openmarket.weniv.co.kr/accounts/signup/`,
      method: "post",
      data: {
        username: `${id}`,
        password: `${pw}`,
        password2: `${pw2}`,
        phone_number: `${phoneNumber}`,
        name: `${name}`,
      },
    });
  }

  async function createAccount(event) {
    event.preventDefault();
    const userData = document.querySelectorAll("input");
    const id = userData[0].value;
    const pw = userData[1].value;
    const pw2 = userData[2].value;
    const name = userData[3].value;
    const phoneNumber = document.querySelector(`.${BuyerSignUpStyles.userPhoneFirst}`).innerText + userData[4].value + userData[5].value;
    try {
      const res = await signUpAxios(id, pw, pw2, name, phoneNumber);
      if (res.status === 201) {
        navigate("/");
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className={styles.main}>
      <section className={styles.logoContainer}>
        <Link to="/login">
          <img src={LogoImg} alt="로고" />
        </Link>
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
      <button className={styles.signUpBtn} onClick={createAccount}>
        가입하기
      </button>
    </div>
  );
}

export default SignUp;
