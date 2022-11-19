import { Link } from "react-router-dom";
import LogoImg from "../asset/Logo-hodu.svg";
import styles from "./styles/Login.module.css";

function Login() {
  // 클릭한 로그인 타입에 따라 클래스를 추가하여 css 스타일 변경
  function clickLoginType(event) {
    const loginType = event.target.innerText;
    if (loginType === "구매회원 로그인") {
      event.target.classList.add(`${styles.clicked}`);
      event.target.nextSibling.classList.remove(`${styles.clicked}`);
    } else {
      event.target.classList.add(`${styles.clicked}`);
      event.target.previousSibling.classList.remove(`${styles.clicked}`);
    }
  }

  return (
    <div className={styles.main}>
      <section className={styles.logoContainer}>
        <img src={LogoImg} alt="로고" />
      </section>
      <section className={styles.userInfoContainer}>
        <div className={styles.loginType}>
          {/* <button className={[styles.buyer, styles.clicked].join(" ")} onClick={clickLoginType}> */}
          <button className={`${styles.buyer} ${styles.clicked}`} onClick={clickLoginType}>
            구매회원 로그인
          </button>
          <button className={styles.seller} onClick={clickLoginType}>
            판매회원 로그인
          </button>
        </div>
        <form className={styles.loginForm} action="">
          <input type="text" id="userId" placeholder="아이디" />
          <input type="password" name="userPw" id="userPw" placeholder="비밀번호" />
          <button className={styles.loginBtn} type="submit">
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
