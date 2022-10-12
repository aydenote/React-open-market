import styles from "./styles/Slide.module.css";
import Slider from "react-slick";
import bookImg from "../asset/book.jpg";
import cooperationImg from "../asset/협업.jpg";
import profileImg from "../asset/프로필2.jpg";

function SlideImg() {
  const settings = {
    dots: true, // 슬라이드 포인트
    infinite: true, // 무한으로 반복
    speed: 500,
    arrows: true,
    slidesToShow: 1, // 1장씩 보이게
    slidesToScroll: 1, // 1장씩 넘어가게
  };

  return (
    <Slider {...settings}>
      <div>
        <img className={styles.slideImg} src={bookImg} alt="슬라이드 이미지" />
      </div>
      <div>
        <img
          className={styles.slideImg}
          src={cooperationImg}
          alt="슬라이드 이미지"
        />
      </div>
      <div>
        <img
          className={styles.slideImg}
          src={profileImg}
          alt="슬라이드 이미지"
        />
      </div>
      <div>
        <img className={styles.slideImg} src={bookImg} alt="슬라이드 이미지" />
      </div>
      <div>
        <img className={styles.slideImg} src={bookImg} alt="슬라이드 이미지" />
      </div>
    </Slider>
  );
}

export default SlideImg;
