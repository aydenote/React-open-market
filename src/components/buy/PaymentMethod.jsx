import React from 'react';
import styled from 'styled-components';

function PaymentMethod() {
  return (
    <MethodContainer>
      <Title>결제 수단</Title>
      <MethodList>
        <MethodSelect>
          <input type="radio" name="method" />
          신용/체크카드
        </MethodSelect>
        <MethodSelect>
          <input type="radio" name="method" />
          무통장 입금
        </MethodSelect>
        <MethodSelect>
          <input type="radio" name="method" />
          휴대폰 결제
        </MethodSelect>
        <MethodSelect>
          <input type="radio" name="method" />
          네이버페이
        </MethodSelect>
        <MethodSelect>
          <input type="radio" name="method" />
          카카오페이
        </MethodSelect>
      </MethodList>
    </MethodContainer>
  );
}

export default PaymentMethod;

const MethodContainer = styled.section`
  width: 60%;
`;

const Title = styled.h2`
  margin: 0;
  padding-bottom: 18px;
  border-bottom: 2px solid #c4c4c4;
  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 30px;
`;

const MethodList = styled.ul`
  display: flex;
  padding: 18px 0;
  border-bottom: 2px solid #c4c4c4;
`;

const MethodSelect = styled.li`
  margin-left: 20px;
`;
