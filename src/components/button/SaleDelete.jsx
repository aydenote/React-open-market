import { useState } from 'react';
import ModalSaleItemDelete from '../modal/ModalSaleItemDelete';
import styled from 'styled-components';

function SaleDelete() {
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
export default SaleDelete;

const ItemDelete = styled.button`
  width: 80px;
  height: 40px;
  margin: auto;
  border: 1px solid #c4c4c4;
  border-radius: 5px;
  background: #ffffff;
  cursor: pointer;
`;
