import { deleteSaleProduct } from '../../apis/seller';
import styled from 'styled-components';

function Accept() {
  function clickAccept(event) {
    const cancelNode = event.target.closest('article').parentNode;
    cancelNode.parentNode.removeChild(cancelNode);
    deleteSaleProduct(cancelNode.dataset.id);
  }

  return <AcceptButton onClick={clickAccept}>확인</AcceptButton>;
}

export default Accept;

const AcceptButton = styled.button`
  padding: 10px 34.25px;
  background: #21bf48;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;
