import { useSelector } from 'react-redux';
import Slider from 'react-slick';
import styled from 'styled-components';

function Slide() {
  const mainProductImg = useSelector(state => state.mainProduct.product);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    mainProductImg.length !== 0 && (
      <Slider {...settings}>
        {mainProductImg.map((product, index) => {
          return (
            <div key={index}>
              <SlideImg src={product.image} alt="슬라이드 이미지" />
            </div>
          );
        })}
      </Slider>
    )
  );
}

export default Slide;

const SlideImg = styled.img`
  width: 100%;
  height: 500px;
  margin: auto;
  object-fit: contain;
`;
