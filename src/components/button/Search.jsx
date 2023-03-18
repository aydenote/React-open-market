import SearchSrc from '../../asset/search.svg';
import styled from 'styled-components';

function Search() {
  function clickSearch() {
    console.log('찾기!');
  }
  return <SearchButton onClick={clickSearch} alt="검색" />;
}

export default Search;

const SearchButton = styled.button`
  position: absolute;
  width: 30px;
  height: 30px;
  top: 5px;
  right: -25px;
  border: none;
  background: url(${SearchSrc}) no-repeat top;
  cursor: pointer;
`;
