import { Link } from "react-router-dom";
import LogoImg from "../asset/Logo-hodu.svg";
import styles from "./styles/SellerHeader.module.css";

function SellerHeader() {
  return (
    <header className={styles.sellerHeader}>
      <Link to="/">
        <img className={styles.sellerlogoImg} src={LogoImg} alt="로고" />
      </Link>
      <p className={styles.sellerCenterText}>판매자 센터</p>
    </header>
  );
}

export default SellerHeader;
