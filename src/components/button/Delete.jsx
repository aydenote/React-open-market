import { useState } from 'react';
import DeleteModal from '../modal/DeleteModal';
import deleteSrc from '../../asset/icon-delete.svg';
import styled from 'styled-components';

function Delete({ cartItem }) {
  let [modalOpen, setModalOpen] = useState(false);

  function clickDeleteBtn() {
    setModalOpen(cartItem);
  }

  return (
    <>
      <DeleteButton onClick={clickDeleteBtn}>
        <img src={deleteSrc} alt="상품 삭제" />
      </DeleteButton>
      {modalOpen && <DeleteModal modalOpen={modalOpen} setModalOpen={setModalOpen} />}
    </>
  );
}

export default Delete;

const DeleteButton = styled.button`
  margin: 18px 18px auto auto;
  padding: 0;
  border: 0;
  background-color: transparent;
  :hover {
    cursor: pointer;
  }
`;
