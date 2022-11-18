import styles from "./styles/ModalCancel.module.css";
import deleteImg from "../asset/icon-delete.svg";

function ModalCancel({ cartInfo, setModalOpen, setPrice, setShipping }) {
  function closeModal() {
    setModalOpen(false);
  }

  function clickAccept(event) {
    const cancelNode = event.target.closest("article").parentNode;
    cancelNode.parentNode.removeChild(cancelNode);
    getProductPrice();
    getShippingFee(cancelNode.dataset.id);
  }

  function getProductPrice() {
    let totalPrice = 0;
    let priceArr = Array.prototype.slice.call(document.querySelectorAll(".price"));

    for (let i = 0; i < priceArr.length; i++) {
      totalPrice += parseInt(priceArr[i].innerText.replaceAll(",", ""));
    }
    setPrice(totalPrice);
  }

  function getShippingFee(id) {
    let totalShippingFee = 0;
    cartInfo = cartInfo
      .filter((item) => {
        return item.data.product_id !== parseInt(id);
      })
      .forEach((item) => {
        totalShippingFee += item.data.shipping_fee;
      });

    setShipping(totalShippingFee);
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

export default ModalCancel;
