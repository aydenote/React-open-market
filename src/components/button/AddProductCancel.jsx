import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

function AddProductCancel() {
  const navigate = useNavigate();

  function clickCancel(event) {
    navigate('/sellerCenter');
  }

  return <CancelButton onClick={clickCancel}>취소</CancelButton>;
}

export default AddProductCancel;

const CancelButton = styled.button`
  width: 200px;
  padding: 19px 0px;
  border-radius: 5px;
  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  border: 1px solid #c4c4c4;
  background: #ffffff;
  color: #767676;
  cursor: pointer;
`;
