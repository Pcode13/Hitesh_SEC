
import {ADD, REMOVE} from './constant';

export const add = data => ({
  type: ADD,
  payload: data,
});

export const sub = item => ({
  type: REMOVE,
  payload: item,
});
