import { Link } from 'react-router-dom';
import { getCookie } from '../../util/cookie';
import HeaderUser from './HeaderUser';
import SearchButton from '../button/Search';
import HeaderNonLogin from './HeaderNonLogin';
import LogoSrc from '../../asset/Logo-hodu.svg';
import SearchSrc from '../../asset/search.svg';
import styled from 'styled-components';

function Header() {
  return (
    <HeaderContainer>
      <HeaderLeftSide>
        <Link to="/">
          <LogoImg src={LogoSrc} alt="로고" />
        </Link>
        <SearchConatiner>
          <SearchInput type="text" placeholder="상품을 검색해보세요!" />
          <SearchButton />
        </SearchConatiner>
      </HeaderLeftSide>
      <HeaderRightSide>
        {getCookie('Token') ? <HeaderUser userType={getCookie('UserType')} /> : <HeaderNonLogin />}
      </HeaderRightSide>
    </HeaderContainer>
  );
}

export default Header;

const HeaderContainer = styled.header`
  display: flex;
  height: 90px;
  justify-content: space-around;
  align-items: center;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.1);
`;

const HeaderLeftSide = styled.div`
  display: inline-block;
  width: 50%;
`;

const LogoImg = styled.img`
  max-width: 100%;
  height: auto;
  vertical-align: bottom;
`;

const SearchConatiner = styled.div`
  display: inline-block;
  position: relative;
  width: 50%;
`;

const SearchInput = styled.input`
  width: 100%;
  margin-left: 30px;
  background: #ffffff;
  border: 2px solid #21bf48;
  border-radius: 50px;
  padding: 10px;
  vertical-align: top;
`;

const SearchImg = styled.img`
  position: absolute;
  top: 5px;
  right: -25px;
  :focus {
    outline: none;
  }
`;

const HeaderRightSide = styled.div`
  display: flex;
`;
