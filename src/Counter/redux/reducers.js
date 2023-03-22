import {ADD, REMOVE} from './constant';

const intalState = {
  count: 0,
};

export default function (state = intalState, action) {
  console.log('state', state.count);
  switch (action.type) {
    case ADD:
      return {count: action.payload + 1};
    case REMOVE:
      return state;
    default:
      state;
  }
}
