import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import UploadBar from './UploadBar';
import SaleInfo from './SaleInfo';
import SellerDashboardMenu from './SellerDashboardMenu';
import { setSaleState } from '../../reducers/seller';
import { getSaleProduct } from '../../apis/seller';
import styled from 'styled-components';

function SellerDashboard() {
  const dispatch = useDispatch();
  const saleItem = useSelector(state => state.seller);

  useEffect(() => {
    getSaleProduct().then(saleItemRes => dispatch(setSaleState(saleItemRes.data.results)));
  }, []);

  return (
    saleItem && (
      <Container>
        <UploadBar />
        <MenuDetailBox>
          <SellerDashboardMenu />
          <SaleInfo />
        </MenuDetailBox>
      </Container>
    )
  );
}
export default SellerDashboard;

const Container = styled.section`
  min-width: 800px;
  margin: auto;
`;

const MenuDetailBox = styled.div`
  display: flex;
`;
