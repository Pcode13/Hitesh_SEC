import {ADD, REMOVE, MAKE_COM} from '../Constant';

export const addSeason = season => ({
  type: ADD,
  payload: season,
});

export const removeSeason = id => ({
  type: REMOVE,
  payload: id,
});