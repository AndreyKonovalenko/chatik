import { TChat, TMessage } from '../pages/chat/chat';
import store from './Store';
import { TAppState } from './Store';
import { TProflieState, TChatState } from './Store';

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

export const getSelectedChatId  = (): string | number| null => {
  const data : TAppState = {...store.getState()};
  return data.chat.selectedChatId;
}
export const getChatEditModeState  = (): boolean => {
  const data : TAppState = {...store.getState()};
  return data.chat.editMode;
}

export const getChats =  (): Array<TChat> | null => {
  const data: TAppState = {...store.getState()};
  return data.chat.chats;
}

export const getChatCurrentUserId = (): string => {
  const data: TAppState = {...store.getState()};
   return data.chat.currentUserId;
} 

export const getMessages = (): Array<TMessage> | null => {
  const data: TAppState = {...store.getState()};
  return data.chat.messages
}