import { EventBus } from '../core/EventBus';
import { TChat, TMessage } from '../pages/chat/chat';

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
  messages: Array<TMessage>| null;
  currentUserId: string;
};

export type TAppState = {
  profile: TProflieState;
  chat: TChatState;
};

class Store<State extends Record<string, unknown>> extends EventBus {
  private state: State = {} as State;
  constructor(defaultState: State) {
    super();
    this.state = defaultState;
    this.set(defaultState);
  }
  public getState() {
    return this.state;
  }
  public set(nextState: Partial<State>) {
    const prevState = { ...this.state };
    this.state = { ...this.state, ...nextState };
    this.emit(StoreEvents.Updated, prevState, nextState);
  }
}

const defaultState: TAppState = {
  profile: {
    editMode: false,
  },
  chat: {
    editMode: false,
    chats: null,
    selectedChatId: null,
    messages: null,
    currentUserId: "1",
  },
};

const store = new Store<TAppState>(defaultState);

export default store;
