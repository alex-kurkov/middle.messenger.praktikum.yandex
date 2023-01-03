import { Route } from '.';
import { BlockConstructable } from './registerComponent';

export default class Router<P extends { [key: string]: any }> {
  static __instance: Nullable<Router<any>> = null;
  routes: Route<P>[] = [];
  history: History = window.history;
  private _currentRoute: Nullable<Route<P>> = null;
  rootQuery?: string;

  constructor(rootQuery: string) {
    if (Router.__instance) {
      return Router.__instance;
    }
    Router.__instance = this;
    this.rootQuery = rootQuery;
  }

  use(
    pathname: string,
    view: BlockConstructable<any>,
    viewProps: P
  ): Router<P> {
    const route = new Route(pathname, view, {
      rootQuery: this.rootQuery,
      ...viewProps,
    } as P);
    this.routes.push(route);
    return this;
  }

  start(): void {
    window.onpopstate = () => {
      this._onRoute(window.location.pathname);
      // this._onRoute(event.currentTarget.location.pathname);
      // this.go(window.location.pathname);
    };
    this._onRoute(window.location.pathname);
  }

  go(pathname: string): void {
    this.history.pushState({}, '', pathname);
    this._onRoute(pathname);
  }

  back() {
    this.history.back();
  }

  forward() {
    this.history.forward();
  }

  private _onRoute(pathname: string): void {
    const route = this.getRoute(pathname);

    if (!route) {
      return;
    }

    // this.routes.forEach(routeItem => {
    //   if (routeItem !== route) {
    //     routeItem.leave();
    //   }
    // })
    if (this._currentRoute && this._currentRoute !== route) {
      this._currentRoute.leave();
    }

    this._currentRoute = route;
    route.render();
  }

  getRoute(pathname: string): Route<P> | undefined {
    return this.routes.find((route) => route.match(pathname));
  }

  get currentPathname(): string | undefined {
    return this._currentRoute?.pathname;
  }
}
