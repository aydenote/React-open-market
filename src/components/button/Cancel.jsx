import styled from 'styled-components';

function Cancel({ setModalOpen }) {
  function closeModal() {
    setModalOpen(false);
  }

  return <CancelButton onClick={closeModal}>취소</CancelButton>;
}

export default Cancel;

const CancelButton = styled.button`
  margin-right: 10px;
  padding: 10px 34.25px;
  background: #ffffff;
  border: 1px solid #c4c4c4;
  border-radius: 5px;
  cursor: pointer;
`;
