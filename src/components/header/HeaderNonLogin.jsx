import { Link } from 'react-router-dom';
import CartImg from '../../asset/shopping-cart.svg';
import UserImg from '../../asset/user.svg';
import styles from '../styles/HeaderNonLogin.module.css';

function HeaderNonLogin() {
  return (
    <>
      <div className={styles.cartContainer}>
        <img className={styles.cart} src={CartImg} alt="장바구니" />
      </div>
      <Link to="/login">
        <div className={styles.loginContainer}>
          <img className={styles.login} src={UserImg} alt="로그인" />
        </div>
      </Link>
    </>
  );
}
export default HeaderNonLogin;
