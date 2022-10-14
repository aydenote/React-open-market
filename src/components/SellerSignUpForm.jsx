import styles from "./styles/SignUp.module.css";

function SellerSignUp() {
  return (
    <form className={styles.signUpForm} action="">
      <label htmlFor="">아이디</label>
      <input type="text" />
      <button type="submit">중복확인</button>
      <label htmlFor="">비밀번호</label>
      <input type="password" />
      <label htmlFor="">비밀번호 재확인</label>
      <input type="password" />
      <label htmlFor="">이름</label>
      <input type="text" />
      <label htmlFor="">휴대폰번호</label>
      <select name="" id="">
        <option value="010"></option>
        <option value="011"></option>
        <option value="016"></option>
        <option value="017"></option>
      </select>
      <input type="number" />
      <input type="number" />
      <label htmlFor="">이메일</label>
      <input type="text" />
      <input type="text" />
      <label htmlFor="">사업자 등록번호</label>
      <input type="number" />
      <label htmlFor="">스토어 이름</label>
      <input type="text" />
    </form>
  );
}

export default SellerSignUp;
