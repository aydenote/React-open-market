import React from 'react';
import styled from 'styled-components';

function ItemUpdate() {
  return <UpdateButton>수정</UpdateButton>;
}

export default ItemUpdate;

const UpdateButton = styled.button`
  width: 80px;
  height: 40px;
  margin: auto;
  border: none;
  border-radius: 5px;
  background: #21bf48;
  color: #ffffff;
  cursor: pointer;
`;
