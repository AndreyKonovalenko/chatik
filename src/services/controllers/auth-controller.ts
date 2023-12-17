import AuthAPI from '../../api/auth-api.ts';

import { TSignInUserData, TSignUpUserData } from '../../api/auth-api.ts';

import store from '../store';

const authAPI = new AuthAPI();

interface IResponse extends XMLHttpRequest {
  reason?: string;
}

export const getUser = async () => {
  const response: IResponse = await authAPI.getUser();
  const data = JSON.parse(response.response);
  if (data.reason) {
    throw Error(data.reason);
  }
  const state = store.getState();
  store.set({ ...state, userSlice: { ...state.userSlice, user: data } });
};

export const signup = async (data: TSignUpUserData) => {
  const response = await authAPI.singup(data);
  if (response.response === 'OK') {
    await getUser();
  } else {
    console.log(response);
  }
};

export const signin = async (data: TSignInUserData) => {
  const response = await authAPI.signin(data);
  if (response.response === 'OK') {
    await getUser();
  } else {
    console.log(response);
  }
};

export const logout = async () => {
  await authAPI.logout();
};
