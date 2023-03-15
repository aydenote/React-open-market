import PostalCode from '../button/PostalCode';
import styled from 'styled-components';

function ShippingInfo() {
  return (
    <>
      <Title>배송정보</Title>
      <OrdererTitle>주문자 정보</OrdererTitle>
      <CustomerInfo>
        <OrdererName>
          <Name>이름</Name>
          <NameInput required />
        </OrdererName>

        <OrdererPhone>
          <Phone>휴대폰</Phone>
          <div>
            <PhoneInput style={{ width: '81px' }} required />
            <PhoneNumberBar>-</PhoneNumberBar>
            <PhoneInput required />
            <PhoneNumberBar>-</PhoneNumberBar>
            <PhoneInput required />
          </div>
        </OrdererPhone>

        <OrdererEmail>
          <Email>이메일</Email>
          <EmailInput type="email" required />
        </OrdererEmail>
      </CustomerInfo>

      <AddressInfo>
        <OrdererTitle>배송지 정보</OrdererTitle>
        <CustomerInfo>
          <OrdererName>
            <Name>수령인</Name>
            <NameInput required />
          </OrdererName>

          <OrdererPhone>
            <Phone>휴대폰</Phone>
            <div>
              <PhoneInput style={{ width: '81px' }} required />
              <PhoneNumberBar>-</PhoneNumberBar>
              <PhoneInput required />
              <PhoneNumberBar>-</PhoneNumberBar>
              <PhoneInput required />
            </div>
          </OrdererPhone>

          <AddressContainer>
            <Address>배송주소</Address>
            <PostalInput required />
            <PostalCode />
            <AddressDetail>
              <AddressInput required />
              <AddressInput required />
            </AddressDetail>
          </AddressContainer>

          <MessageContainer>
            <Address>배송 메시지</Address>
            <MessageInput />
          </MessageContainer>
        </CustomerInfo>
      </AddressInfo>
    </>
  );
}

export default ShippingInfo;

const Title = styled.h2`
  margin: 96px 0 40px 0;
  padding-bottom: 18px;
  border-bottom: 2px solid #c4c4c4;
  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 30px;
`;

const CustomerInfo = styled.form`
  display: flex;
  flex-direction: column;
`;

const OrdererTitle = styled.h3`
  padding-bottom: 8px;
  border-bottom: 2px solid #c4c4c4;
  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 23px;
`;

const OrdererName = styled.section`
  display: flex;
  align-items: center;
  padding: 8px 0;
  border-bottom: 1px solid #c4c4c4;
`;

const OrdererPhone = styled.section`
  display: flex;
  align-items: center;
  padding: 8px 0;
  border-bottom: 1px solid #c4c4c4;
`;

const OrdererEmail = styled.section`
  display: flex;
  align-items: center;
  padding: 8px 0;
  border-bottom: 1px solid #c4c4c4;
`;

const Name = styled.p`
  width: 170px;
`;
const Phone = styled.p`
  width: 170px;
`;
const Email = styled.p`
  width: 170px;
`;

const NameInput = styled.input`
  width: 334px;
  padding: 10px 0;
  border: 1px solid #c4c4c4;
  :focus {
    outline: none;
  }
`;

const PhoneInput = styled.input`
  width: 100px;
  padding: 10px 0;
  border: 1px solid #c4c4c4;
  text-align: center;
  :focus {
    outline: none;
  }
`;

const PhoneNumberBar = styled.span`
  width: 7px;
  margin: 0 10px;
`;

const EmailInput = styled.input`
  width: 334px;
  padding: 10px 0;
  border: 1px solid #c4c4c4;
  :focus {
    outline: none;
  }
`;

const AddressInfo = styled.section`
  margin-top: 40px;
`;

const AddressContainer = styled.section`
  padding: 8px 0;
  border-bottom: 1px solid #c4c4c4;
`;

const Address = styled.p`
  display: inline-block;
  width: 170px;
`;

const PostalInput = styled.input`
  width: 170px;
  margin-right: 10px;
  padding: 10px 0;
  border: 1px solid #c4c4c4;
  :focus {
    outline: none;
  }
`;

const AddressInput = styled.input`
  width: 800px;
  margin-left: 170px;
  padding: 10px 0;
  border: 1px solid #c4c4c4;
  :focus {
    outline: none;
  }
  :first-child {
    margin: 8px 0 8px 170px;
  }
`;

const AddressDetail = styled.section``;

const MessageContainer = styled.section`
  padding: 8px 0;
  border-bottom: 1px solid #c4c4c4;
`;

const MessageInput = styled.input`
  width: 800px;
  margin-right: 10px;
  padding: 10px 0;
  border: 1px solid #c4c4c4;
  :focus {
    outline: none;
  }
`;
