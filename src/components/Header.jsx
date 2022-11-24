// import { useState } from "react";
import { Link } from "react-router-dom";
import MyPage from "./MyPage";
import LogoImg from "../asset/Logo-hodu.svg";
import SearchImg from "../asset/search.svg";
import CartImg from "../asset/shopping-cart.svg";
import styles from "./styles/Header.module.css";
import { getCookie, deleteCookie } from "../util/cookie";

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
      <div className={styles.headerRightSide}>
        <Link to="/cart">
          <div className={styles.cartContainer}>
            <img className={styles.cart} src={CartImg} alt="장바구니" />
          </div>
        </Link>
        {getCookie("Token") ? (
          <MyPage />
        ) : (
          <Link to="/login">
            <MyPage />
          </Link>
        )}
      </div>
    </header>
  );
}

export default Header;
