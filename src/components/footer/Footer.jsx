import styled from 'styled-components';
import instaSrc from '../../asset/icon-insta.svg';
import facebookSrc from '../../asset/icon-facebook.svg';
import youtubeSrc from '../../asset/icon-youtube.svg';

function Footer() {
  return (
    <FooterContainer>
      <FooterTopContainer>
        <FooterInfoList>
          <li>호두샵 소개</li>
          <li>이용약관</li>
          <li>개인정보처리방침</li>
          <li>전자금융거래약관</li>
          <li>청소년보호정책</li>
          <li>제휴문의</li>
        </FooterInfoList>
        <FooterImgContainer>
          <img src={instaSrc} alt="인스타그램" />
          <img src={facebookSrc} alt="페이스북" />
          <img src={youtubeSrc} alt="유튜브" />
        </FooterImgContainer>
      </FooterTopContainer>
      <FooterOfficeInfo>
        <p>(주)HODU SHOP</p>
        <p>제주특별자치도 제주시 동광고 137 제주코딩베이스캠프</p>
        <p>사업자 번호 : 000-0000-0000 | 통신판매업</p>
        <p>대표 : 김호두</p>
      </FooterOfficeInfo>
    </FooterContainer>
  );
}

export default Footer;

const FooterContainer = styled.footer`
  width: auto;
  height: 298px;
  background: #f2f2f2;
`;

const FooterTopContainer = styled.div`
  display: flex;
  position: relative;
  justify-content: space-between;
  width: 1280px;
  padding-bottom: 12px;
  top: 25%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-bottom: 1px solid black;
`;

const FooterInfoList = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  li:not(:last-child)::after {
    content: 'ㅣ';
    margin: 0px 14px;
  }
`;

const FooterImgContainer = styled.div`
  img:not(:first-child) {
    margin-left: 14px;
  }
`;

const FooterOfficeInfo = styled.div`
  position: relative;
  width: 1280px;
  margin-top: 50px;
  padding-bottom: 12px;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  p:not(:first-child) {
    margin-top: 10px;
  }
  p {
    font-family: 'Spoqa Han Sans Neo';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 24px;
    color: #767676;
  }
`;
