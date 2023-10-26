import { EventBus } from '../core/EventBus';

export enum StoreEvents {
  Updated = 'Updated',
}

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

export type TProflieState = {
  editMode: boolean;
};

export type TChatState = {
  editMode: boolean;
};

export type TAppState = {
  profile: TProflieState;
  chat: TChatState;
};

const defaultState: TAppState = {
  profile: {
    editMode: false,
  },
  chat: {
    editMode: false,
  },
};

const store = new Store<TAppState>(defaultState);

export default store;
