import styles from "./styles/LoginFail.module.css";

function LoginFail() {
  return <p className={styles.failText}>아이디 또는 비밀번호가 일치하지 않습니다.</p>;
}
export default LoginFail;
