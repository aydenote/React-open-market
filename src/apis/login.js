import axios from 'axios';

function login(userId, userPw) {
  return axios({
    url: `https://openmarket.weniv.co.kr/accounts/login/`,
    method: 'post',
    data: {
      username: `${userId}`,
      password: `${userPw}`,
      login_type: loginType === '구매회원 로그인' ? 'BUYER' : 'SELLER',
    },
  });
}

export default login;
