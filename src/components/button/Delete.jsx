import { useState } from 'react';
import ModalCancel from '../ModalCancel';
import deleteSrc from '../../asset/icon-delete.svg';
import styled from 'styled-components';

function Delete(props) {
  let [modalOpen, setModalOpen] = useState(false);

  function clickDeleteBtn() {
    setModalOpen(true);
  }

  return (
    <>
      <DeleteButton onClick={clickDeleteBtn}>
        <img src={deleteSrc} alt="상품 삭제" />
      </DeleteButton>
      {modalOpen && (
        <ModalCancel
          cartInfo={props.cartInfo}
          setModalOpen={setModalOpen}
          setPrice={props.setPrice}
          setShipping={props.setShipping}
        />
      )}
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
