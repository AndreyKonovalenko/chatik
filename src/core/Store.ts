import { EventBus } from "./EventBus";

// export enum StoreEvents {
//     Updated = 'Updated'
// }

// export default class Store<State extends Record<string, any>> extends EventBus {
//   private state: State = {} as State;

//   constructor(defaultState: State) {
//     super();

//     this.state = defaultState;
//     this.set(defaultState);
//   }

//   public getState() {
//     return this.state;
//   }

//   public set(nextState: Partial<State>) {
//     const prevState = { ...this.state };

//     this.state = { ...this.state, ...nextState };

//     this.emit(StoreEvents.Updated, prevState, nextState);
//   }
// }


//import { EventBus } from "./EventBus";

export enum StoreEvents {
  Updated = 'Updated'
}

type Indexed = {
[kay in string]: unknown 
}

class Store extends EventBus {
private state: Indexed = {
  text: 'test'
};

public getState() {
  return this.state;
}
  public set(nextState: Indexed){
    const prevState: Indexed = {...this.state};
    this.state = {...this.getState, ...nextState}
    this.emit(StoreEvents.Updated, prevState, nextState);
  }
} 

const store = new Store;

export default store;




