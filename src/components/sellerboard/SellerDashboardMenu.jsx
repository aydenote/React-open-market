import { useSelector } from 'react-redux';
import styled from 'styled-components';

function SellerDashboardMenu() {
  const saleItem = useSelector(state => state.seller);

  return (
    <ItemList>
      <SaleProduct className="clicked">
        판매중인 상품
        <SaleItemCount>{saleItem.length}</SaleItemCount>
      </SaleProduct>
      <OrderProduct>주문/배송</OrderProduct>
      <ReviewProduct>문의/리뷰</ReviewProduct>
      <Analysis>통계</Analysis>
      <StoreSetting>스토어 설정</StoreSetting>
    </ItemList>
  );
}

export default SellerDashboardMenu;

const ItemList = styled.ul`
  display: inline-block;
  width: 250px;
  margin-left: 100px;
`;

const SaleItemCount = styled.p`
  display: inline-block;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  text-align: center;
  color: #ffffff;
  background: #eb5757;
`;

const SaleProduct = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 250px;
  padding: 15px;
  border-radius: 5px;
  background: #21bf48;
`;

const OrderProduct = styled.li`
  width: 250px;
  padding: 15px;
  border-radius: 5px;
  :hover {
    background-color: #effff3;
  }
`;

const ReviewProduct = styled.li`
  width: 250px;
  padding: 15px;
  border-radius: 5px;
  :hover {
    background-color: #effff3;
  }
`;

const Analysis = styled.li`
  width: 250px;
  padding: 15px;
  border-radius: 5px;
  :hover {
    background-color: #effff3;
  }
`;

const StoreSetting = styled.li`
  width: 250px;
  padding: 15px;
  border-radius: 5px;
  :hover {
    background-color: #effff3;
  }
`;
