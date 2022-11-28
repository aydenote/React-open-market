import styles from "./styles/SellerDashboard.module.css";
import { useState } from "react";
import GetSellerProduct from "./GetSellerProduct";
import UploadBar from "./UploadBar";

function SellerDashboard() {
  let [sellerData, setSellerData] = useState(false);

  return (
    <>
      {sellerData ? (
        <section className={styles.container}>
          <UploadBar sellerData={sellerData} />
        </section>
      ) : (
        <GetSellerProduct setSellerData={setSellerData} />
      )}
    </>
  );
}
export default SellerDashboard;
