import { Link, useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import LogoImg from "../asset/Logo-hodu.svg";
import styles from "./styles/Login.module.css";
import LoginFail from "./LoginFail";
import { useState } from "react";
import { useCookies } from "react-cookie";

function Login() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [cookies, setCookie, removeCookie] = useCookies(["Token"]);
  let [failText, setFailText] = useState(false);
  let loginType = "구매회원 로그인";

  // 클릭한 로그인 타입에 따라 클래스를 추가하여 css 스타일 변경
  function clickLoginType(event) {
    loginType = event.target.innerText;
    if (loginType === "구매회원 로그인") {
      event.target.classList.add(`${styles.clicked}`);
      event.target.nextSibling.classList.remove(`${styles.clicked}`);
      loginType = "구매회원 로그인";
    } else {
      event.target.classList.add(`${styles.clicked}`);
      event.target.previousSibling.classList.remove(`${styles.clicked}`);
      loginType = "판매회원 로그인";
    }
  }

  function loginAxios() {
    const userId = document.querySelector("#userId").value;
    const userPw = document.querySelector("#userPw").value;
    return axios({
      url: `https://openmarket.weniv.co.kr/accounts/login/`,
      method: "post",
      data: {
        username: `${userId}`,
        password: `${userPw}`,
        login_type: loginType === "구매회원 로그인" ? "BUYER" : "SELLER", // BUYER : 일반 구매자, SELLER : 판매자
      },
    });
  }

  async function clickLogin(event) {
    event.preventDefault();
    try {
      const res = await loginAxios();
      if (res.status === 200) {
        setCookie("Token", res.data.token);
        navigate("/", { state: pathname });
      }
    } catch (error) {
      console.error(error);
      if (error.response.data.FAIL_Message === "로그인 정보가 없습니다.") {
        setFailText(true);
      }
    }
  }

  return (
    <div className={styles.main}>
      <section className={styles.logoContainer}>
        <img src={LogoImg} alt="로고" />
      </section>
      <section className={styles.userInfoContainer}>
        <div className={styles.loginType}>
          <button className={`${styles.buyer} ${styles.clicked}`} onClick={clickLoginType}>
            구매회원 로그인
          </button>
          <button className={styles.seller} onClick={clickLoginType}>
            판매회원 로그인
          </button>
        </div>
        <form className={styles.loginForm} action="">
          <input type="text" id="userId" placeholder="아이디" />
          <input type="password" id="userPw" placeholder="비밀번호" />
          {failText ? <LoginFail /> : null}
          <button className={styles.loginBtn} onClick={clickLogin}>
            로그인
          </button>
        </form>
      </section>
      <section className={styles.join_findContainer}>
        <Link to="/signUp">
          <p className={styles.signUp}>회원가입</p>
        </Link>
        <Link to="/findPw">
          <p className={styles.findPw}>비밀번호 찾기</p>
        </Link>
      </section>
    </div>
  );
}

export default Login;
