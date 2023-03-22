import {LOGIN, REGISTER} from '../Constant';

export const login = data => ({
  type: LOGIN,
  payload: data,
});

export const register = data => (
  {
  type: REGISTER,
  payload: data,
});
