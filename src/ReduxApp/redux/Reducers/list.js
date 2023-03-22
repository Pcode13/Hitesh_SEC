import {ADD, REMOVE} from '../Constant';


const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      return [...state, action.payload];
    case REMOVE:
      return state.filter(season => season.id !== action.payload);
    // case MARK_COMPLE:
    //   return state.map(season => {
    //     if (season.id == action.payload) {
    //       season.isWatched = !season.isWatched;
    //     }
    //     return season;
    //   });
    default:
      return state;
  }
};