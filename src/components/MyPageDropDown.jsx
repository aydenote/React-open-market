import MyPage from './button/MyPage';
import Logout from './button/Logout';
import styled from 'styled-components';

function MyPageDropDown() {
  return (
    <Container>
      <MyPage />
      <Logout />
    </Container>
  );
}
export default MyPageDropDown;

const Container = styled.section`
  position: absolute;
  top: 65px;
  width: 130px;
  padding: 10px;
  background-color: #ffffff;
  border-radius: 8px;
  z-index: 1;
  filter: drop-shadow(0px 0px 6px rgba(0, 0, 0, 0.25));
  ::after {
    position: absolute;
    content: '';
    top: 0;
    left: 10px;
    margin-top: -30px;
    border-top: 20px solid transparent;
    border-right: 20px solid transparent;
    border-bottom: 20px solid #ffffff;
    border-left: 20px solid transparent;
    z-index: -1;
  }
`;
