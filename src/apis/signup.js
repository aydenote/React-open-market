import axios from 'axios';

function signup(id, pw, pw2, name, phoneNumber) {
  return axios({
    url: `https://openmarket.weniv.co.kr/accounts/signup/`,
    method: 'post',
    data: {
      username: `${id}`,
      password: `${pw}`,
      password2: `${pw2}`,
      phone_number: `${phoneNumber}`,
      name: `${name}`,
    },
  });
}

export default signup;
