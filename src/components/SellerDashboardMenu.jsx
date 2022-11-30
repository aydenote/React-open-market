import styles from "./styles/SellerDashboardMenu.module.css";

function SellerDashboardMenu({ sellerData }) {
  function clickMenu(event) {
    event.target.parentNode.childNodes.forEach((menu) => menu.classList.remove(`${styles.clicked}`));
    event.target.classList.add(`${styles.clicked}`);
  }

  return (
    <ul className={styles.itemList} onClick={clickMenu}>
      <li className={`${styles.saleProduct} ${styles.clicked}`}>
        판매중인 상품
        <p className={styles.saleItemCount}>{sellerData.length}</p>
      </li>
      <li className={styles.orderProduct}>주문/배송</li>
      <li className={styles.reviewProduct}>문의/리뷰</li>
      <li className={styles.analysis}>통계</li>
      <li className={styles.storeSetting}>스토어 설정</li>
    </ul>
  );
}

export default SellerDashboardMenu;
