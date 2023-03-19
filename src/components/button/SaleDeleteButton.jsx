import { useState } from 'react';
import styled from 'styled-components';
import ModalSaleItemDelete from '../modal/ModalSaleItemDelete';

function SaleDeleteButton() {
  let [modalOpen, setModalOpen] = useState(false);

  function clickDeleteBtn() {
    setModalOpen(true);
  }

  return (
    <>
      <ItemDelete onClick={clickDeleteBtn}>삭제</ItemDelete>
      {modalOpen && <ModalSaleItemDelete setModalOpen={setModalOpen} />}
    </>
  );
}
export default SaleDeleteButton;

const ItemDelete = styled.button`
  width: 80px;
  height: 40px;
  margin: auto;
  border: 1px solid #c4c4c4;
  border-radius: 5px;
  background: #ffffff;
  cursor: pointer;
`;
