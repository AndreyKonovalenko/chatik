import store from './Store';
import { TAppState } from './Store';
import { TProflieState, TChatState } from './Store';

export const getProfileState = (): TProflieState => {
  const data: TAppState = { ...store.getState() };
  return data.profile;
};

export const getChatState = (): TChatState => {
  const data: TAppState = { ...store.getState() };
  return data.chat;
};
