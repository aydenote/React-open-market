import { useState } from 'react';
import ModalSaleItemDelete from '../ModalSaleItemDelete';
import styles from '../styles/SaleDeleteButton.module.css';

function SaleDeleteButton() {
  let [modalOpen, setModalOpen] = useState(false);

  function clickDeleteBtn() {
    setModalOpen(true);
  }

  return (
    <>
      <button className={styles.itemDelete} onClick={clickDeleteBtn}>
        삭제
      </button>
      {modalOpen && <ModalSaleItemDelete setModalOpen={setModalOpen} />}
    </>
  );
}
export default SaleDeleteButton;
