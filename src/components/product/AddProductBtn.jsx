import AddProductCancel from '../button/AddProductCancel';
import SaveButton from '../button/Save';
import styled from 'styled-components';

function AddProductBtn() {
  return (
    <ButtonContainer>
      <AddProductCancel />
      <SaveButton />
    </ButtonContainer>
  );
}

export default AddProductBtn;

const ButtonContainer = styled.section`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  grid-column: 3;
  grid-row: 3;
`;
