import Block from "./Block";
import { isDeepEqual } from "../utils/dash-utility/isDeepEqual";
import { render, TBlockProps } from "./render";


export class Route {
    private block: Block<TBlockProps> | null = null;
  
    constructor(
      private pathname: string,
      private readonly blockClass: typeof Block,
      private readonly query: string,
      private protectedRoute?: string
    ) {}
  
    leave() {
      this.block = null;
    }
  
    match(pathname: string) {
      return isDeepEqual(pathname, this.pathname);
    }
  
    render() {
      if (!this.block) {
        this.block = new this.blockClass({});
        render(this.query, this.block, this.protectedRoute);
        return;
      }
    }
  }
  