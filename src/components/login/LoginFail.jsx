import styles from "./styles/LoginFail.module.css";

function LoginFail({ failText }) {
  return <p className={styles.failText}>{failText}</p>;
}
export default LoginFail;
