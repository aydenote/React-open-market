import { Link } from "react-router-dom";
import CartImg from "../asset/shopping-cart.svg";
import UserImg from "../asset/user.svg";
import styles from "./styles/HeaderBuyer.module.css";

function HeaderBuyer() {
  return (
    <>
      <Link to="/cart">
        <div className={styles.cartContainer}>
          <img className={styles.cart} src={CartImg} alt="장바구니" />
        </div>
      </Link>
      <div className={styles.myPageContainer}>
        <img className={styles.myPage} src={UserImg} alt="마이페이지" />
      </div>
    </>
  );
}
export default HeaderBuyer;
