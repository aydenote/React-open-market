export const SET = 'IMAGE/SET';

export function setImage(imageData) {
  return {
    type: SET,
    imageData,
  };
}

const initalState = [];

function image(state = initalState, action) {
  switch (action.type) {
    case SET:
      return action.imageData;
    default:
      return state;
  }
}

export default image;
