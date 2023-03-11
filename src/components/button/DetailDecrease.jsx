import minusSrc from '../../asset/icon-minus-line.svg';
import styled from 'styled-components';

function DetailDecrease({ count, setCount }) {
  function clickMinus() {
    if (count <= 1) return;
    setCount(count - 1);
  }

  return (
    <MinusButton onClick={clickMinus}>
      <img src={minusSrc} alt="상품 수량 감소" />
    </MinusButton>
  );
}

export default DetailDecrease;

const MinusButton = styled.button`
  flex-grow: 1;
  flex-shrink: 0;
  flex-basis: 50px;
  padding: 0;
  border: none;
  border-right: 1px solid #c4c4c4;
  border-radius: 5px 0 0 5px;
  outline: none;
  background-color: #ffffff;
`;
