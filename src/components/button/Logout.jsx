import React from 'react';
import { useNavigate } from 'react-router-dom';
import { deleteCookie } from '../../util/cookie';
import styled from 'styled-components';

function Logout() {
  const navigate = useNavigate();

  function clickLogout() {
    deleteCookie('Token');
    deleteCookie('UserType');
    navigate('/');
    window.location.reload();
  }

  return <LogoutButton onClick={clickLogout}>로그아웃</LogoutButton>;
}

export default Logout;

const LogoutButton = styled.button`
  display: block;
  width: 110px;
  height: 40px;
  margin: auto;
  margin-top: 8px;
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
