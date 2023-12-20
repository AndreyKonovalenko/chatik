import { TMessage } from '../pages/chat/chat';
import store, { TAppState, TProflieState, TChatState } from './store';

// Profile selectors

export const getProfileState = (): TProflieState => {
  const data: TAppState = { ...store.getState() };
  return data.profile;
};

// Chat selectors
export const getChatState = (): TChatState => {
  const data: TAppState = { ...store.getState() };
  return data.chat;
};

export const getSelectedChatId = (): string | number | null => {
  const data: TAppState = { ...store.getState() };
  return data.chat.selectedChatId;
};

export const getChatCurrentUserId = (): string => {
  const data: TAppState = { ...store.getState() };
  return data.chat.currentUserId;
};

export const getMessages = (): Array<TMessage> | null => {
  const data: TAppState = { ...store.getState() };
  return data.chat.messages;
};
