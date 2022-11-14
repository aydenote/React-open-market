import ModalCancel from "./ModalCancel";
import styles from "./styles/DeleteBtn.module.css";
import deleteImg from "../asset/icon-delete.svg";
import { useState } from "react";

function DeleteBtn() {
  const [modalOpen, setModalOpen] = useState(false);

  function clickDeleteBtn() {
    setModalOpen(true);
  }

  return (
    <>
      <button className={styles.deleteBtn} onClick={clickDeleteBtn}>
        <img src={deleteImg} alt="상품 삭제" />
      </button>
      {modalOpen && <ModalCancel setModalOpen={setModalOpen} />}
    </>
  );
}

export default DeleteBtn;
