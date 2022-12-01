import styles from "./styles/SellerDashboard.module.css";
import { useState } from "react";
import UploadBar from "./UploadBar";
import SellerDashboardMenu from "./SellerDashboardMenu";
import SaleInfo from "./SaleInfo";
import GetSellerProduct from "./GetSellerProduct";

function SellerDashboard() {
  let [sellerData, setSellerData] = useState(false);

  return (
    <>
      {sellerData ? (
        <section className={styles.container}>
          <UploadBar sellerData={sellerData} />
          <div className={styles.menuDetailBox}>
            <SellerDashboardMenu sellerData={sellerData} />
            <SaleInfo sellerData={sellerData} />
          </div>
        </section>
      ) : (
        <GetSellerProduct setSellerData={setSellerData} />
      )}
    </>
  );
}
export default SellerDashboard;
