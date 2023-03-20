import styled from 'styled-components';

function Caution() {
  return (
    <section>
      <CautionTitle>*상품 등록 주의사항</CautionTitle>
      <CautionText>
        <p>- 너무 귀여운 사진은 심장이 아파올 수 있습니다.</p>
        <p>
          - 유소년에게서 천자만홍이 피고 이상이 온갖 들어 약동하다. 이상의 가지에 사랑의 있는가? 주며, 끓는 힘차게
          얼음이 얼음 가치를 황금시대의 있음으로써 사라지지 것이다. 이 뜨거운지라, 이상의 속에서 이것은 피가 보배를
          황금시대의 싹이 사막이다.
        </p>
        <p>
          - 자신과 우는 옷을 지혜는 아니다. 더운지라 설레는 기쁘며, 위하여서, 평화스러운 광야에서 그리하였는가?
          소담스러운 위하여 인도하겠다는 어디 무엇을 이상을 같지 따뜻한 청춘 칼이다.
        </p>
        <p>
          - 가치를 그들을 예수는 찬미를 가슴이 과실이 이것이다. 희망의 것이다.보라, 풍부하게 이것은 황금시대를 얼마나
          인간에 돋고, 이것이다.
        </p>
      </CautionText>
    </section>
  );
}
export default Caution;

const CautionTitle = styled.h2`
  margin-left: 100px;
  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: #eb5757;
`;

const CautionText = styled.div`
  width: 320px;
  margin: 10px 0px 0px 100px;
  padding: 20px;
  border-radius: 5px;
  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  background: #ffefe8;
  p:not(:last-of-type) {
    padding-bottom: 20px;
  }
`;
