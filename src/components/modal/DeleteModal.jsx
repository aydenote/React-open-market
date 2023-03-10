import { useDispatch } from 'react-redux';
import { setCartData } from '../../reducers/cart';
import { deleteCartItem, getCartList } from '../../apis/cart';
import deleteSrc from '../../asset/icon-delete.svg';
import styled from 'styled-components';

function DeleteModal({ setModalOpen, modalOpen }) {
  const dispatch = useDispatch();

  function closeModal() {
    setModalOpen(false);
  }

  async function clickAccept() {
    await deleteCartItem(modalOpen);
    await getCartList().then(cartData => {
      dispatch(setCartData(cartData.data.results));
    });
  }

  return (
    <Container>
      <DeleteButton onClick={closeModal}>
        <img src={deleteSrc} alt="취소" />
      </DeleteButton>
      <MainText>상품을 삭제하시겠습니까?</MainText>
      <ButtonContainer>
        <CancelButton onClick={closeModal}>취소</CancelButton>
        <AcceptButton onClick={clickAccept}>확인</AcceptButton>
      </ButtonContainer>
    </Container>
  );
}

export default DeleteModal;

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

const DeleteButton = styled.button`
  display: block;
  margin: 18px 18px auto auto;
  padding: 0;
  border: 0;
  background-color: transparent;
  :hover {
    cursor: pointer;
  }
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

const CancelButton = styled.button`
  margin-right: 10px;
  padding: 10px 34.25px;
  background: #ffffff;
  border: 1px solid #c4c4c4;
  border-radius: 5px;
  :hover {
    cursor: pointer;
  }
`;

const AcceptButton = styled.button`
  padding: 10px 34.25px;
  background: #21bf48;
  border: none;
  border-radius: 5px;
  :hover {
    cursor: pointer;
  }
`;
