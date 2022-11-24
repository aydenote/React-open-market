import { useEffect } from "react";
import UserImg from "../asset/user.svg";
import styles from "./styles/MyPage.module.css";
import { getCookie } from "../util/cookie";

function MyPage() {
  function test() {
    const container = document.querySelector(`.${styles.userContainer}`);
    const imgEl = document.createElement("img");
    imgEl.classList.add(`${styles.isLoginImg}`);
    imgEl.setAttribute("src", UserImg);
    getCookie("Token") ? setLogin(container, imgEl) : setMyPage(container, imgEl);
  }
  function setLogin(container, imgEl) {
    imgEl.setAttribute("alt", "로그인");
    container.classList.add(`${styles.mypage}`);
    container.appendChild(imgEl);
  }
  function setMyPage(container, imgEl) {
    imgEl.setAttribute("alt", "마이페이지");
    container.classList.add(`${styles.login}`);
    container.appendChild(imgEl);
  }

  useEffect(() => {
    test();
  }, []);

  return <div className={styles.userContainer}></div>;
}

export default MyPage;
