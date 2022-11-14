import styles from "./styles/ModalCancel.module.css";
import deleteImg from "../asset/icon-delete.svg";

function ModalCancel({ setModalOpen }) {
  function closeModal() {
    setModalOpen(false);
  }

  return (
    <article className={styles.container}>
      <button className={styles.deleteBtn} onClick={closeModal}>
        <img src={deleteImg} alt="취소" />
      </button>
      <p className={styles.mainText}>상품을 삭제하시겠습니까?</p>
      <div className={styles.btnContainer}>
        <button className={styles.cancelBtn} onClick={closeModal}>
          취소
        </button>
        <button className={styles.acceptBtn}>확인</button>
      </div>
    </article>
  );
}

export default ModalCancel;
