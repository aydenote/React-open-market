import Slider from 'react-slick';
import styled from 'styled-components';
import bookSrc from '../../asset/book.jpg';
import cooperationSrc from '../../asset/협업.jpg';
import profileSrc from '../../asset/프로필2.jpg';

function Slide() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      <div>
        <SlideImg src={bookSrc} alt="슬라이드 이미지" />
      </div>
      <div>
        <SlideImg src={cooperationSrc} alt="슬라이드 이미지" />
      </div>
      <div>
        <SlideImg src={profileSrc} alt="슬라이드 이미지" />
      </div>
      <div>
        <SlideImg src={bookSrc} alt="슬라이드 이미지" />
      </div>
      <div>
        <SlideImg src={cooperationSrc} alt="슬라이드 이미지" />
      </div>
    </Slider>
  );
}

export default Slide;

const SlideImg = styled.img`
  width: 100%;
  height: 500px;
  margin: auto;
  object-fit: fill;
`;
