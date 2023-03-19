import { useState } from 'react';
import UploadBar from './UploadBar';
import SellerDashboardMenu from './SellerDashboardMenu';
import SaleInfo from '../SaleInfo';
import GetSellerProduct from './GetSellerProduct';
import styled from 'styled-components';

function SellerDashboard() {
  let [sellerData, setSellerData] = useState(false);

  return (
    <>
      {sellerData ? (
        <Container>
          <UploadBar sellerData={sellerData} />
          <MenuDetailBox>
            <SellerDashboardMenu sellerData={sellerData} />
            <SaleInfo sellerData={sellerData} />
          </MenuDetailBox>
        </Container>
      ) : (
        <GetSellerProduct setSellerData={setSellerData} />
      )}
    </>
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
