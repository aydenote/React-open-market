import plusSrc from '../../asset/icon-plus-line.svg';
import styled from 'styled-components';

function DetailIncrease({ count, setCount }) {
  function clickPlus() {
    setCount(count + 1);
  }
  return (
    <PlusButton onClick={clickPlus}>
      <img src={plusSrc} alt="상품 수량 증가" />
    </PlusButton>
  );
}

export default DetailIncrease;

const PlusButton = styled.button`
  flex-grow: 1;
  flex-shrink: 0;
  flex-basis: 50px;
  padding: 0;
  border: none;
  border-left: 1px solid #c4c4c4;
  border-radius: 0 5px 5px 0;
  outline: none;
  background-color: #ffffff;
`;
