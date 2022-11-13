import styles from "./styles/DeleteBtn.module.css";
import deleteImg from "../asset/icon-delete.svg";

function DeleteBtn() {
  return (
    <button className={styles.deleteBtn}>
      <img src={deleteImg} alt="상품 삭제" />
    </button>
  );
}

export default DeleteBtn;
