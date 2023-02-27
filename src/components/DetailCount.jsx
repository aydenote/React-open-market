import { useSelector } from 'react-redux';
import Decrease from './button/Decrease';
import Increase from './button/Increase';
import styled from 'styled-components';

function DetailCount() {
  const count = useSelector(state => state.counter);
  return (
    <CountContainer>
      <Decrease />
      <ProductCount>{count}</ProductCount>
      <Increase />
    </CountContainer>
  );
}

export default DetailCount;

const CountContainer = styled.div`
  display: flex;
  width: 152px;
  height: 50px;
  border: 1px solid #c4c4c4;
  border-radius: 5px;
  background: #ffffff;
`;

const ProductCount = styled.p`
  flex-grow: 1;
  flex-shrink: 0;
  flex-basis: 50px;
  text-align: center;
  line-height: 50px;
`;
