export const INCREASE = 'COUNT/INCRESE';
export const DECREASE = 'COUNT/DECREASE';

export function increaseCount() {
  return {
    type: INCREASE,
  };
}

export function decreaseCount() {
  return {
    type: DECREASE,
  };
}

const initalState = 1;

function counter(state = initalState, action) {
  switch (action.type) {
    case INCREASE:
      return state + 1;
    case DECREASE:
      return state - 1;
    default:
      return state;
  }
}

export default counter;
