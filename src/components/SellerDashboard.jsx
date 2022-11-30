import styles from "./styles/SellerDashboard.module.css";
import { useState } from "react";
import UploadBar from "./UploadBar";
import SellerDashboardMenu from "./SellerDashboardMenu";
import GetSellerProduct from "./GetSellerProduct";

function SellerDashboard() {
  let [sellerData, setSellerData] = useState(false);

  return (
    <>
      {sellerData ? (
        <section className={styles.container}>
          <UploadBar sellerData={sellerData} />
          <SellerDashboardMenu sellerData={sellerData} />
          {/* <SailInfo sellerData={sellerData} /> */}
        </section>
      ) : (
        <GetSellerProduct setSellerData={setSellerData} />
      )}
    </>
  );
}
export default SellerDashboard;
