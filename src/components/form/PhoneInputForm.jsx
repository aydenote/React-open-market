import arrowUpSrc from '../../asset/icon-up-arrow.svg';
import arrowDownSrc from '../../asset/icon-down-arrow.svg';
import styled from 'styled-components';

function PhoneInputForm() {
  // 전화번호 앞자리 리스트 활성화
  function clickSelectBox(event) {
    const target = event.target;
    target.classList.toggle('clicked');
    document.querySelector('.selectList').classList.toggle('visible');
  }

  // 전화번호 앞자리 선택
  function clickSelectList(event) {
    const selectedOption = event.target.innerText;
    const selectBox = document.querySelector('.userPhoneFirst');
    const selectList = document.querySelector('.selectList');
    if (selectedOption.length === 3) {
      selectBox.innerText = selectedOption;
      selectBox.classList.remove('clicked');
      selectList.classList.remove('visible');
    }
  }

  // 4자리 숫자만 입력
  function inputUserPhone(event) {
    let phoneNumber = event.target;
    phoneNumber.value = phoneNumber.value.replace(/[^0-9]/g, '');
    if (phoneNumber.value.length > phoneNumber.maxLength) {
      phoneNumber.value = phoneNumber.value.slice(0, phoneNumber.maxLength);
    }
  }
  return (
    <>
      <UserPhoneLabel>휴대폰번호</UserPhoneLabel>
      <UserPhoneContainer>
        <UserPhoneFirst className="userPhoneFirst" onClick={clickSelectBox}>
          010
        </UserPhoneFirst>
        <SelectList className="selectList" onClick={clickSelectList}>
          <ListItem>010</ListItem>
          <ListItem>011</ListItem>
          <ListItem>016</ListItem>
          <ListItem>017</ListItem>
        </SelectList>
        <UserPhoneMiddle type="number" onInput={inputUserPhone} maxLength="4" required />
        <UserPhoneLast type="number" onInput={inputUserPhone} maxLength="4" required />
      </UserPhoneContainer>
    </>
  );
}

export default PhoneInputForm;

const UserPhoneLabel = styled.p`
  margin: 12px 0px;
  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: #767676;
`;

const UserPhoneContainer = styled.div`
  display: flex;
  position: relative;
`;

const UserPhoneFirst = styled.div`
  width: 152px;
  padding: 17.5px 0;
  text-align: center;
  border: 1px solid #c4c4c4;
  border-radius: 5px;
  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  background: url(${arrowDownSrc}) no-repeat 95% 50%;
  cursor: pointer;
  :focus {
    outline: none;
    border: 1px solid #21bf48;
  }
  &.clicked {
    background: url(${arrowUpSrc}) no-repeat 95% 50%;
  }
`;

const SelectList = styled.ul`
  display: none;
  &.visible {
    display: inline-block;
    position: absolute;
    top: 110%;
    width: 152px;
    text-align: center;
    border: 1px solid #c4c4c4;
    border-radius: 5px;
    background-color: #ffffff;
  }
`;

const ListItem = styled.li`
  padding: 10px 0px;
  cursor: pointer;
`;

const UserPhoneMiddle = styled.input`
  width: 152px;
  margin: 0px 12px;
  padding: 17.5px 0;
  text-align: center;
  border: 1px solid #c4c4c4;
  border-radius: 5px;
`;

const UserPhoneLast = styled.input`
  width: 152px;
  padding: 17.5px 0px;
  text-align: center;
  border: 1px solid #c4c4c4;
  border-radius: 5px;
`;
