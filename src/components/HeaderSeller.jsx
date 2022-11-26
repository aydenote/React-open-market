import { Link } from "react-router-dom";
import BagImg from "../asset/icon-shopping-bag.svg";
import styles from "./styles/HeaderSeller.module.css";
import MyPage from "./MyPage";

function HeaderSeller() {
  return (
    <>
      <MyPage />
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
