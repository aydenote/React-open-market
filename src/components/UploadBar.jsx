import uploadImg from "../asset/icon-plus.svg";
import styles from "./styles/UploadBar.module.css";

function UploadBar({ sellerData }) {
  return (
    <header className={styles.dashboardHeader}>
      <div>
        <p className={styles.title}>대시보드</p>
        <p className={styles.storeName}>{sellerData ? sellerData[0].store_name : null}</p>
      </div>
      <button className={styles.uploadBtn}>
        <img className={styles.uploadImg} src={uploadImg} alt="" />
      </button>
    </header>
  );
}

export default UploadBar;
