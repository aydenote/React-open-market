import { useDispatch } from 'react-redux';
import { deleteSaleProduct } from '../../apis/seller';
import { deleteSaleState } from '../../reducers/seller';
import styled from 'styled-components';

function Accept() {
  const dispatch = useDispatch();
  function clickAccept(event) {
    const cancelNode = event.target.closest('article').parentNode;
    deleteSaleProduct(cancelNode.dataset.id);
    dispatch(deleteSaleState(parseInt(cancelNode.dataset.id)));
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
