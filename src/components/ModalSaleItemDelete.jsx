import axios from "axios";
import styles from "./styles/ModalSaleItemDelete.module.css";
import deleteImg from "../asset/icon-delete.svg";
import { getCookie } from "../util/cookie";

function ModalSaleItemDelete({ setModalOpen }) {
  function closeModal() {
    setModalOpen(false);
  }

  function saleProductDeleteAxios(productId) {
    axios.delete(`https://openmarket.weniv.co.kr/products/${productId}`, {
      headers: {
        Authorization: `JWT ${getCookie("Token")}`,
      },
    });
  }

  async function clickAccept(event) {
    const cancelNode = event.target.closest("article").parentNode;
    cancelNode.parentNode.removeChild(cancelNode);
    saleProductDeleteAxios(cancelNode.dataset.id);
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
