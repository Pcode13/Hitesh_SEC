import {LOGIN, REGISTER} from '../Constant';

const initialState = {
  users: [],
  loggeduser: false,
};

export default (state = initialState, action) => {
  console.log('action', action);
  console.log('action Payload', action.payload);
  switch (action.type) {
    case REGISTER:
      console.log('action Payload', action.payload);
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    case LOGIN:
      return {
        ...state,
        loggeduser: true,
        users: action.payload,
      };
    default:
      return state;
  }
};
