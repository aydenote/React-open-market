import { Link } from "react-router-dom";
import HeaderUser from "./HeaderUser";
import HeaderNonLogin from "./HeaderNonLogin";
import LogoImg from "../asset/Logo-hodu.svg";
import SearchImg from "../asset/search.svg";
import styles from "./styles/Header.module.css";
import { getCookie } from "../util/cookie";

function Header() {
  function clickSearch() {
    console.log("찾기!");
  }
  return (
    <header className={styles.header}>
      <div className={styles.headerLeftSide}>
        <Link to="/">
          <img className={styles.logoImg} src={LogoImg} alt="로고" />
        </Link>
        <div className={styles.searchConatiner}>
          <input className={styles.searchInput} type="text" placeholder="상품을 검색해보세요!" />
          <img className={styles.searchImg} onClick={clickSearch} src={SearchImg} alt="검색" />
        </div>
      </div>
      <div className={styles.headerRightSide}>{getCookie("Token") ? <HeaderUser userType={getCookie("UserType")} /> : <HeaderNonLogin />}</div>
    </header>
  );
}

export default Header;
