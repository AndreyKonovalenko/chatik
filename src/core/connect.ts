import Block from './Block';
import { StoreEvents } from './MyRedux';
import store, { TAppState } from '../services/store';

export function connect<T extends Record<string, unknown>>(
  Component: typeof Block<T>,
  mapStateToProps: (state: TAppState) => T
): typeof Block<T> {
  return class extends Component {
    constructor(props: T) {
      super({ ...props, ...mapStateToProps(store.getState()) });
      store.on(StoreEvents.Updated, () => {
        this.setProps({ ...mapStateToProps(store.getState()) });
      });
    }
  };
}
