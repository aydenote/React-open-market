import LogoImg from "../asset/Logo-hodu.svg";
import SearchImg from "../asset/search.svg";
import CartImg from "../asset/shopping-cart.svg";
import UserImg from "../asset/user.svg";

function Header() {
  return (
    <>
      <header>
        <div className="">
          <img className="" src={LogoImg} alt="로고" />
          <input className="" type="text" placeholder="상품을 검색해보세요!" />
          <img className="" src={SearchImg} alt="검색" />
        </div>
        <div className="">
          <img className="" src={CartImg} alt="장바구니" />
          <img className="" src={UserImg} alt="로그인 및 마이페이지" />
        </div>
      </header>
    </>
  );
}

export default Header;
