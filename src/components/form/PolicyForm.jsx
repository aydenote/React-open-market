import React from 'react';
import checkBoxSrc from '../../asset/icon-check.svg';
import styled from 'styled-components';

function PolicyForm() {
  return (
    <Policy action="">
      <PolicyCheckBox id="checkbox" type="checkbox" alt="이용 정책 동의" />
      <CheckLabel htmlFor="checkbox"></CheckLabel>
      <PolicyLabel>
        호두샵의 <strong>이용약관</strong> 및 <strong>개인정보처리방침</strong>에 대한 내용을 확인하였고 동의합니다.
      </PolicyLabel>
    </Policy>
  );
}

export default PolicyForm;

const Policy = styled.form`
  display: flex;
  justify-content: flex-end;
  width: 480px;
  margin-top: 34px;
`;

const PolicyCheckBox = styled.input`
  display: none;
  :checked + label {
    border: 1px solid #21bf48;
    background: url(${checkBoxSrc}) center no-repeat;
  }
`;

const CheckLabel = styled.label`
  display: inline-block;
  width: 20px;
  height: 16px;
  margin: 3px 10px 0px 0px;
  border: 1px solid #c4c4c4;
  cursor: pointer;
`;

const PolicyLabel = styled.label`
  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: #767676;
  strong {
    text-decoration: underline;
  }
`;
