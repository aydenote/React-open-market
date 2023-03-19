import { Link } from 'react-router-dom';
import uploadImg from '../../asset/icon-plus.svg';
import styles from '../styles/UploadBar.module.css';

function UploadBar({ sellerData }) {
  return (
    <header className={styles.dashboardHeader}>
      <div>
        <p className={styles.title}>대시보드</p>
        <p className={styles.storeName}>{sellerData ? sellerData[0].store_name : null}</p>
      </div>
      <Link to="/addProduct" className={styles.addProductLink}>
        <img className={styles.uploadImg} src={uploadImg} alt="업로드" />
      </Link>
    </header>
  );
}

export default UploadBar;
