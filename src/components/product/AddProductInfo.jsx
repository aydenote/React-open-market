import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setImage } from '../../reducers/image';
import uploadSrc from '../../asset/icon-imgUpload.svg';
import styled from 'styled-components';

function AddProductInfo() {
  const dispatch = useDispatch();
  const [imageSrc, setImageSrc] = useState('');

  function encodeFileToBase64(fileBlob) {
    const reader = new FileReader();
    reader.readAsDataURL(fileBlob);
    dispatch(setImage(fileBlob));
    return new Promise(resolve => {
      reader.onload = () => {
        setImageSrc(reader.result);
        resolve();
      };
    });
  }

  function changeImage(event) {
    if (event.target.files[0]) encodeFileToBase64(event.target.files[0]);
  }

  return (
    <Container>
      <InfoTitle>상품 이미지</InfoTitle>
      <ImgInput type="file" id="imgFile" accept="image/*" onChange={changeImage}></ImgInput>
      <label htmlFor="imgFile">{imageSrc ? <PreviewImage src={imageSrc} alt="" /> : <NonImageBox />}</label>
    </Container>
  );
}
export default AddProductInfo;

const Container = styled.main`
  display: inline-block;
  margin-left: 80px;
`;

const InfoTitle = styled.p`
  margin-bottom: 10px;
  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: #767676;
`;

const ImgInput = styled.input`
  display: none;
`;

const PreviewImage = styled.img`
  width: 454px;
  height: 454px;
  object-fit: fill;
  cursor: pointer;
`;

const NonImageBox = styled.div`
  display: inline-block;
  padding: 227px;
  background: url(${uploadSrc}) no-repeat center;
  background-color: #c4c4c4;
  cursor: pointer;
`;
