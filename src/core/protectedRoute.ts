import Block from '../core/Block';
import store from '../services/Store';
import Router from './Router';

export function ProtectedRoute<T extends Record<string, unknown>>(
  Component: typeof Block<T>
): typeof Block<T> | void {
  const { isAuthenticated } = store.getState();
  console.log(isAuthenticated);

  if (isAuthenticated) {
    return Component;
  }
  return;

  //   return class extends Component {
  //     constructor(props: T) {
  //       super({ ...props });
  //       store.on(StoreEvents.Updated, () => {
  //         this.setProps({ ...store.getState() });
  //       });
  //     }
  //     protected render(): string {
  //       console.log(this.props);
  //     }
  //   };
}
