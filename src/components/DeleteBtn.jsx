import { useState } from "react";
import ModalCancel from "./ModalCancel";
import styles from "./styles/DeleteBtn.module.css";
import deleteImg from "../asset/icon-delete.svg";

function DeleteBtn(props) {
  let [modalOpen, setModalOpen] = useState(false);

  function clickDeleteBtn() {
    setModalOpen(true);
  }

  return (
    <>
      <button className={styles.deleteBtn} onClick={clickDeleteBtn}>
        <img src={deleteImg} alt="상품 삭제" />
      </button>
      {modalOpen && <ModalCancel cartInfo={props.cartInfo} setModalOpen={setModalOpen} setPrice={props.setPrice} setShipping={props.setShipping} />}
    </>
  );
}

export default DeleteBtn;
