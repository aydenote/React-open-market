import styles from "./styles/Footer.module.css";
import instaImg from "../asset/icon-insta.svg";
import facebookImg from "../asset/icon-facebook.svg";
import youtubeImg from "../asset/icon-youtube.svg";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <ul className={styles.footerNav}>
          <li>호두샵 소개</li>
          <li>이용약관</li>
          <li>개인정보처리방침</li>
          <li>전자금융거래약관</li>
          <li>청소년보호정책</li>
          <li>제휴문의</li>
        </ul>
        <div className={styles.footerImg}>
          <img src={instaImg} alt="인스타그램" />
          <img src={facebookImg} alt="페이스북" />
          <img src={youtubeImg} alt="유튜브" />
        </div>
      </div>
      <div className={styles.officeInfo}>
        <p>(주)HODU SHOP</p>
        <p>제주특별자치도 제주시 동광고 137 제주코딩베이스캠프</p>
        <p>사업자 번호 : 000-0000-0000 | 통신판매업</p>
        <p>대표 : 김호두</p>
      </div>
    </footer>
  );
}

export default Footer;
