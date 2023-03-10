import deleteSrc from '../../asset/icon-delete.svg';
import styled from 'styled-components';

function DeleteModal({ cartInfo, setModalOpen, setPrice, setShipping, modalOpen }) {
  function closeModal() {
    setModalOpen(false);
  }

  function clickAccept(event) {
    const cancelNode = event.target.closest('article').parentNode;
    cancelNode.parentNode.removeChild(cancelNode);
    getProductPrice();
    getShippingFee(cancelNode.dataset.id);
  }

  function getProductPrice() {
    let totalPrice = 0;
    let priceArr = Array.prototype.slice.call(document.querySelectorAll('.price'));

    for (let i = 0; i < priceArr.length; i++) {
      totalPrice += parseInt(priceArr[i].innerText.replaceAll(',', ''));
    }
    setPrice(totalPrice);
  }

  function getShippingFee(id) {
    let totalShippingFee = 0;
    cartInfo = cartInfo
      .filter(item => {
        return item.data.product_id !== parseInt(id);
      })
      .forEach(item => {
        totalShippingFee += item.data.shipping_fee;
      });

    setShipping(totalShippingFee);
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
