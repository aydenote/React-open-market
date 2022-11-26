import { Link } from "react-router-dom";
import CartImg from "../asset/shopping-cart.svg";
import styles from "./styles/HeaderBuyer.module.css";
import MyPage from "./MyPage";

function HeaderBuyer() {
  return (
    <>
      <Link to="/cart">
        <div className={styles.cartContainer}>
          <img className={styles.cart} src={CartImg} alt="장바구니" />
        </div>
      </Link>
      <MyPage />
    </>
  );
}
export default HeaderBuyer;
