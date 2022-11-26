import { useNavigate } from "react-router-dom";
import styles from "./styles/MyPageDropDown.module.css";
import { deleteCookie } from "../util/cookie";

function MyPageDropDown() {
  const navigate = useNavigate();

  function clickLogout() {
    deleteCookie("Token");
    deleteCookie("UserType");
    navigate("/");
    window.location.reload();
  }

  return (
    <>
      <section className={styles.container}>
        <button className={styles.myPageBtn}>마이페이지</button>
        <button className={styles.logoutBtn} onClick={clickLogout}>
          로그아웃
        </button>
      </section>
    </>
  );
}
export default MyPageDropDown;
