import Block from './Block';
import store from '../services/store';
import uiConstants from '../utils/ui-constants';
import Router from './Router';

const { PROTECTED_ROUTE, routes } = uiConstants;

export type TBlockProps = {
  getContent: void;
};

export function render(
  query: string,
  block: Block<TBlockProps>,
  protectedRoute?: string
) {
  const state = store.getState();
  console.log(state);

  if (protectedRoute === PROTECTED_ROUTE && !state.userSlice.user) {
    Router.go(routes.INDEX);
    throw new Error('you are not authenticated');
  }
  const root = document.querySelector(query);

  if (root === null) {
    throw new Error(`root not found by selector "${query}"`);
  }

  root.innerHTML = '';
  root.append(block.getContent()!);
  return root;
}
