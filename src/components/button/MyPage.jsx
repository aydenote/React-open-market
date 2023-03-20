import React from 'react';
import styled from 'styled-components';

function MyPage() {
  return <MyPageButton>마이페이지</MyPageButton>;
}

export default MyPage;

const MyPageButton = styled.button`
  display: block;
  width: 110px;
  height: 40px;
  margin: auto;
  border: none;
  padding: 10px 12px;
  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: #767676;
  background-color: #ffffff;
  :hover {
    color: #000000;
  }
`;
