import { EventBus } from "../core/EventBus";

export enum StoreEvents {
  Updated = 'Updated'
}

// type Indexed = {
// [kay in string]: unknown 
// }

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
  public set(nextState: Partial<State>){
    const prevState = {...this.state};
    this.state = {...this.state, ...nextState}
    this.emit(StoreEvents.Updated, prevState, nextState);
  }
} 

type TProflie = { 
  editMode: boolean
}

export type TAppState =  {
  profile: TProflie
};

const defaultState: TAppState = {
  profile: {
    editMode: false
  }
};


const store = new Store<TAppState>(defaultState);

export default store;




