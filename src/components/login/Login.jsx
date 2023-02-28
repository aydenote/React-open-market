import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import login from '../../apis/login';
import { setCookie } from '../../util/cookie';
import BuyerButton from '../button/Buyer';
import SellerButton from '../button/Seller';
import LogoSrc from '../asset/Logo-hodu.svg';
import styles from './styles/Login.module.css';
import LoginFail from './LoginFail';
import styled from 'styled-components';

function Login() {
  const navigate = useNavigate();
  const loginType = useSelector(state => state.loginType);

  function loginAxios() {
    const userId = document.querySelector('#userId').value;
    const userPw = document.querySelector('#userPw').value;
    return login(userId, userPw, loginType);
  }

  async function clickLogin(event) {
    event.preventDefault();
    try {
      const res = await loginAxios();
      if (res.status === 200) {
        setCookie('Token', res.data.token);
        setCookie('UserType', res.data.user_type);
        navigate('/');
      }
    } catch (error) {
      console.error(error);
      if (error.response.data.FAIL_Message) {
        // setFailText(error.response.data.FAIL_Message);
      }
    }
  }

  return (
    <Main>
      <LogoContainer>
        <img src={LogoSrc} alt="로고" />
      </LogoContainer>
      <UserInfoContainer>
        <LoginType>
          <BuyerButton />
          <SellerButton />
        </LoginType>
        <form className={styles.loginForm} action="">
          <input type="text" id="userId" placeholder="아이디" />
          <input type="password" id="userPw" placeholder="비밀번호" />
          {/* {failText ? <LoginFail failText={failText} /> : null} */}
          <button className={styles.loginBtn} onClick={clickLogin}>
            로그인
          </button>
        </form>
      </UserInfoContainer>
      <section className={styles.join_findContainer}>
        <Link to="/signUp">
          <p className={styles.signUp}>회원가입</p>
        </Link>
        <Link to="/findPw">
          <p className={styles.findPw}>비밀번호 찾기</p>
        </Link>
      </section>
    </Main>
  );
}

export default Login;

const Main = styled.div`
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const LogoContainer = styled.section`
  margin-bottom: 70px;
  img {
    width: 238px;
  }
`;

const UserInfoContainer = styled.section``;
const LoginType = styled.div`
  position: relative;
  top: 10px;
`;
