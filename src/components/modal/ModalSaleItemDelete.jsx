import CancelButton from '../button/Cancel';
import AcceptButton from '../button/Accept';
import cancelSrc from '../../asset/icon-delete.svg';
import styled from 'styled-components';

function ModalSaleItemDelete({ setModalOpen }) {
  function closeModal() {
    setModalOpen(false);
  }

  return (
    <Container>
      <CancelImage src={cancelSrc} alt="취소" onClick={closeModal} />
      <MainText>상품을 삭제하시겠습니까?</MainText>
      <ButtonContainer>
        <CancelButton setModalOpen={setModalOpen} />
        <AcceptButton />
      </ButtonContainer>
    </Container>
  );
}

export default ModalSaleItemDelete;

const Container = styled.article`
  width: 300px;
  height: 200px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #ffffff;
  border: 1px solid #c4c4c4;
  border-radius: 8px;
`;

const CancelImage = styled.img`
  display: block;
  margin: 18px 18px auto auto;
  padding: 0;
  border: 0;
  background-color: transparent;
`;

const MainText = styled.p`
  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
`;

const ButtonContainer = styled.div`
  margin-top: 40px;
  text-align: center;
`;
