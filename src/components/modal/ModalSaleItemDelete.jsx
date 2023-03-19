import { deleteSaleProduct } from '../../apis/seller';
import deleteImg from '../../asset/icon-delete.svg';
import styles from '../styles/ModalSaleItemDelete.module.css';

function ModalSaleItemDelete({ setModalOpen }) {
  function closeModal() {
    setModalOpen(false);
  }

  async function clickAccept(event) {
    const cancelNode = event.target.closest('article').parentNode;
    cancelNode.parentNode.removeChild(cancelNode);
    deleteSaleProduct(cancelNode.dataset.id);
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
        <button className={styles.acceptBtn} onClick={clickAccept}>
          확인
        </button>
      </div>
    </article>
  );
}
export default ModalSaleItemDelete;
