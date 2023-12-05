import Block from './Block';
import store from '../services/Store';

type TBlockProps = {
  getContent: void;
};

// add utils isEquel

function isEqual(lhs: string, rhs: string) {
  return lhs === rhs;
}

function render(
  query: string,
  block: Block<TBlockProps>,
  protectedRoute: boolean | undefined
) {
  const { isAuthenticated } = store.getState();
  console.log(protectedRoute);
  if (protectedRoute && !isAuthenticated) {
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

class Route {
  private block: Block<TBlockProps> | null = null;

  constructor(
    private pathname: string,
    private readonly blockClass: typeof Block,
    private readonly query: string,
    private protectedRoute: boolean
  ) {}

  leave() {
    this.block = null;
  }

  match(pathname: string) {
    return isEqual(pathname, this.pathname);
  }

  render() {
    if (!this.block) {
      this.block = new this.blockClass({});
      console.log('renderd this', this.block);
      render(this.query, this.block, this.protectedRoute);
      return;
    }
  }
}

class Router {
  private static __instance: Router;
  private routes: Route[] = [];
  private currentRoute: Route | null = null;
  private history = window.history;

  constructor(private readonly rootQuery: string) {
    if (Router.__instance) {
      return Router.__instance;
    }
    this.routes = [];
    Router.__instance = this;
  }

  public use(pathname: string, block: typeof Block, protectedRote: boolean) {
    const route = new Route(pathname, block, this.rootQuery, protectedRote);
    this.routes.push(route);

    return this;
  }

  public start() {
    window.onpopstate = (event: PopStateEvent) => {
      const target = event.currentTarget as Window;
      this._onRoute(target.location.pathname);
    };

    this._onRoute(window.location.pathname);
  }

  private _onRoute(pathname: string) {
    const route = this.getRoute(pathname);

    if (!route) {
      return;
    }

    if (this.currentRoute && this.currentRoute !== route) {
      this.currentRoute.leave();
    }

    this.currentRoute = route;

    route.render();
  }

  public go(pathname: string) {
    this.history.pushState({}, '', pathname);
    console.log(this.currentRoute);
    this._onRoute(pathname);
  }

  public back() {
    this.history.back();
  }

  public forward() {
    this.history.forward();
  }

  private getRoute(pathname: string) {
    return this.routes.find((route) => route.match(pathname));
  }
}

export default new Router('#app');
