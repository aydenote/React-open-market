import styles from "./styles/SaleInfo.module.css";

function SaleInfo({ sellerData }) {
  return (
    <section className={styles.container}>
      <header>
        <ul className={styles.sailHeader}>
          <li>상품 정보</li>
          <li>판매 가격</li>
          <li>수정</li>
          <li>삭제</li>
        </ul>
      </header>
      {sellerData.map((item) => (
        <section className={styles.itemContainer} key={item.product_id}>
          {console.log(item)}
          <div className={styles.itemInfo}>
            <img className={styles.itemImg} src={item.image} alt="상품" />
            <div className={styles.itemInfoText}>
              <p className={styles.itemName}>{item.product_name}</p>
              <p className={styles.itemStock}>재고 : {item.stock}개</p>
            </div>
          </div>
          <p className={styles.itemPrice}>{item.price.toLocaleString()}원</p>
          <button className={styles.itemUpdate}>수정</button>
          <button className={styles.itemDelete}>삭제</button>
        </section>
      ))}
    </section>
  );
}

export default SaleInfo;
