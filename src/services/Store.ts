import { TChat, TMessage } from '../pages/chat/chat';
import { TUser } from '../api/auth-api';
import { Store } from '../core/MyRedux';

export enum StoreEvents {
  Updated = 'Updated',
}

export type TProflieState = {
  editMode: boolean;
};

export type TChatState = {
  editMode: boolean;
  chats: Array<TChat> | null;
  selectedChatId: null | string | number;
  messages: Array<TMessage> | null;
  currentUserId: string;
};

export type TAppState = {
  userSlice: {
    user: TUser | null;
    loading: boolean;
  };
  profile: TProflieState;
  chat: TChatState;
};

const defaultState: TAppState = {
  userSlice: { user: null, loading: false },
  profile: {
    editMode: false,
  },
  chat: {
    editMode: false,
    chats: null,
    selectedChatId: null,
    messages: null,
    currentUserId: '1',
  },
};

const store = new Store(defaultState);

export default store;
