import React from 'react';
import styled from 'styled-components';

function PostalCode() {
  return <CodeSearch>우편번호 조회</CodeSearch>;
}

export default PostalCode;

const CodeSearch = styled.button`
  padding: 10px 30px;
  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  border: none;
  border-radius: 5px;
  color: #ffffff;
  background: #21bf48;
  cursor: pointer;
`;
