import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getProducts } from '../../apis/products';
import { setProductState } from '../../reducers/mainProduct';
import styled from 'styled-components';

function MainProduct() {
  const dispatch = useDispatch();
  const { product } = useSelector(state => state.mainProduct);

  useEffect(() => {
    getProducts().then(productRes => {
      dispatch(setProductState(productRes.data.results));
    });
  }, []);

  return (
    <ProductContainer>
      {product.map(product => (
        <Link to="/productDetail" state={{ data: product }} key={product.product_id}>
          <ProductList key={product.product_id}>
            <ProductImg src={product.image} alt="상품 이미지" />
            <ProductStoreName>{product.store_name}</ProductStoreName>
            <ProductName>{product.product_name}</ProductName>
            <ProductPrice>{product.price.toLocaleString()}</ProductPrice>
          </ProductList>
        </Link>
      ))}
    </ProductContainer>
  );
}

export default MainProduct;

const ProductContainer = styled.ul`
  display: grid;
  max-width: 1280px;
  grid-template-columns: repeat(3, 1fr);
  margin: 80px auto;
`;

const ProductList = styled.li`
  width: 380px;
  margin: 15px auto;
`;

const ProductImg = styled.img`
  width: 380px;
  height: 380px;
  object-fit: fill;
  border: 1px solid #c4c4c4;
  border-radius: 10px;
`;

const ProductStoreName = styled.p`
  margin: 16px 0px 10px 0;
  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  color: #767676;
`;

const ProductName = styled.p`
  margin-bottom: 10px;
  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #000000;
`;

const ProductPrice = styled.p`
  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 30px;
  ::after {
    content: '원';
    font-family: 'Spoqa Han Sans Neo';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
  }
`;
