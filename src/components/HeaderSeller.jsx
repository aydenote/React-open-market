import { Link } from "react-router-dom";
import BagImg from "../asset/icon-shopping-bag.svg";
import UserImg from "../asset/user.svg";
import styles from "./styles/HeaderSeller.module.css";

function HeaderSeller() {
  return (
    <>
      <div className={styles.myPageContainer}>
        <img className={styles.myPage} src={UserImg} alt="마이페이지" />
      </div>
      <Link to="/sellerCenter">
        <div className={styles.sellerCenter}>
          <img className={styles.sellerImg} src={BagImg} alt="" />
          <p className={styles.sellerText}>판매자 센터</p>
        </div>
      </Link>
    </>
  );
}
export default HeaderSeller;
